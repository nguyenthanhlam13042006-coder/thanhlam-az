param(
    [int]$Port = 8000
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"

try {
    $listener.Prefixes.Add($prefix)
    $listener.Start()
    Write-Host "THANH LAM LUXURY DEV SERVER"
    Write-Host "Running at $prefix"
} catch {
    $Port = 8080
    $prefix = "http://localhost:$Port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $listener.Start()
    Write-Host "THANH LAM LUXURY DEV SERVER"
    Write-Host "Running at $prefix"
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".png"  = "image/png"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".webp" = "image/webp"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
}

$root = $PSScriptRoot

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.RawUrl
        $path = $rawUrl.Split('?')[0]
        if ($path -eq "/" -or [string]::IsNullOrWhiteSpace($path)) {
            $path = "/index.html"
        }

        $decodedPath = [System.Uri]::UnescapeDataString($path.TrimStart('/'))
        $localPath = [System.IO.Path]::Combine($root, $decodedPath.Replace('/', '\'))
        $fullPath = [System.IO.Path]::GetFullPath($localPath)

        if (-not $fullPath.StartsWith([System.IO.Path]::GetFullPath($root))) {
            $response.StatusCode = 403
            $response.Close()
            continue
        }

        if ([System.IO.Directory]::Exists($fullPath)) {
            $fullPath = [System.IO.Path]::Combine($fullPath, "index.html")
        }

        if ([System.IO.File]::Exists($fullPath)) {
            $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
            $mime = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $mime = $mimeTypes[$ext]
            }
            $response.ContentType = $mime
            $response.AddHeader("Cache-Control", "no-cache")

            $bytes = [System.IO.File]::ReadAllBytes($fullPath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.StatusCode = 200
        } else {
            $response.StatusCode = 404
            $notFoundMsg = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 Not Found</h1><p>File not found on server.</p>")
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $notFoundMsg.Length
            $response.OutputStream.Write($notFoundMsg, 0, $notFoundMsg.Length)
        }
        $response.Close()
    } catch {
        # continue loop
    }
}
