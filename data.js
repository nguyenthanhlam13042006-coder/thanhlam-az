/* ==========================================================================
   THANH LAM LUXURY — DATA STORE (PORTFOLIO & LEARNING JOURNAL)
   Tác giả: Nguyễn Thị Thanh Lam
   Định hướng: Haute Couture / Quiet Luxury / E-Commerce / Student Portfolio
   ========================================================================== */

const PORTFOLIO_DATA = {
  // Thông tin tác giả & sinh viên
  author: {
    fullName: "Nguyễn Thị Thanh Lam",
    role: "Sinh viên & Người sáng lập ý tưởng Thanh Lam Luxury",
    universityMajor: "Quản trị Kinh doanh / Thương mại Điện tử",
    email: "nguyenthithanhlam.contact@gmail.com",
    studioEmail: "studio@thanhlam.vn",
    phone: "0908 123 456",
    location: "TP. Hồ Chí Minh, Việt Nam",
    quote: "Mỗi nỗ lực nhỏ hôm nay đều là nền móng vững chắc cho sự tự tin và thành công ngày mai.",
    portraitGold: "assets/images/thanhlam_portrait_gold.jpg",
    portraitWhite: "assets/images/thanhlam_portrait_white.jpg"
  },

  // Bộ sưu tập các tác phẩm / sản phẩm thời trang
  pieces: {
    look1: {
      id: "look1",
      number: "01",
      category: "trousers",
      categoryName: "Quần & Áo hai dây",
      name: "RELAXED PLEATED TROUSER & SILK TANK",
      collection: "01 / FORM — SS 2026",
      material: "100% Raw Mulberry Silk & Washed Linen Blend",
      color: "Ivory Chalk & Obsidian Black",
      fit: "High-rise, deep double front pleats, flowing wide-leg drape",
      year: "2026",
      concept: "Sự đối lập giữa độ rủ mềm mại của lụa tơ tằm và cấu trúc xếp ly sâu kiểu tailoring nam tính. Thiết kế tạo nên sự giải phóng tối đa cho chuyển động của phụ nữ trong nhịp sống đương đại.",
      image: "assets/images/col_look1_black_pant.jpg",
      tags: ["Tailoring", "Natural Silk", "Pleated"]
    },
    look2: {
      id: "look2",
      number: "02",
      category: "outerwear",
      categoryName: "Áo khoác & Blazer",
      name: "DECONSTRUCTED RAW LINEN BLAZER",
      collection: "01 / FORM — SS 2026",
      material: "100% Heavyweight Irish Raw Linen, Hand-carved Horn Buttons",
      color: "Earthy Botanical Olive",
      fit: "Unlined interior, soft dropped shoulders, organic relaxed silhouette",
      year: "2026",
      concept: "Loại bỏ hoàn toàn phần đệm vai cứng nhắc của suit truyền thống. Giữ lại vẻ mộc của chất vải sợi tự nhiên với đường ve áo buông lơi, đem lại cảm giác tự tại và sang trọng thầm lặng.",
      image: "assets/images/col_look2_olive_blazer.jpg",
      tags: ["Outerwear", "Raw Linen", "Quiet Luxury"]
    },
    look3: {
      id: "look3",
      number: "03",
      category: "shirts",
      categoryName: "Áo sơ mi cao cấp",
      name: "OVERSIZED RAW POPLIN SHIRT",
      collection: "01 / FORM — SS 2026",
      material: "Organic Handwoven Cotton Poplin, Natural Shell Buttons",
      color: "Natural Undyed Chalk",
      fit: "Relaxed volume, elongated architectural cuffs, curved side vent",
      year: "2026",
      concept: "Chiếc sơ mi kinh điển được tái hiện với tỷ lệ phóng đại có chủ đích. Chất vải mỏng nhẹ thở theo từng chuyển động, vừa vặn như làn da thứ hai dưới ánh nắng tự nhiên.",
      image: "assets/images/col_look3_hair_clip.jpg",
      tags: ["Essential", "Organic Cotton", "Timeless"]
    },
    wide: {
      id: "wide",
      number: "04",
      category: "sets",
      categoryName: "Bộ 2 mảnh kiến trúc",
      name: "ARCHITECTURAL TWO-PIECE SUIT",
      collection: "01 / FORM — SS 2026",
      material: "Pre-washed Flax Linen & Undyed Cotton Slub",
      color: "Warm Sandstone & Limestone Ivory",
      fit: "Boxy overshirt jacket paired with fluid straight-cut trousers",
      year: "2026",
      concept: "Lấy cảm hứng từ hình học thô mộc của kiến trúc Brutalism. Bộ trang phục hòa quyện hoàn hảo giữa ánh sáng, bóng đổ và bề mặt tường đá tĩnh lặng, biến cơ thể thành một tác phẩm điêu khắc mềm.",
      image: "assets/images/col_form_concrete_steps.jpg",
      tags: ["Two-Piece", "Architectural", "Flax Linen"]
    },
    portrait: {
      id: "portrait",
      number: "05",
      category: "dresses",
      categoryName: "Đầm & Chân dung phong cách",
      name: "THE THANH LAM WOMAN",
      collection: "01 / FORM — SS 2026",
      material: "Pure Expression & Soft Natural Lighting",
      color: "Neutral Palette",
      fit: "Effortless, natural beauty",
      year: "2026",
      concept: "Hình ảnh người phụ nữ Thanh Lam: Không ồn ào phô diễn, trang điểm nhẹ nhàng, mái tóc tự nhiên và một ánh nhìn có chiều sâu. Thời trang không định nghĩa cô ấy, mà cô ấy thổi hồn vào trang phục.",
      image: "assets/images/col_portrait_natural.jpg",
      tags: ["Identity", "Visual Campaign"]
    },
    rack: {
      id: "rack",
      number: "06",
      category: "sets",
      categoryName: "Bộ sưu tập tuyển chọn",
      name: "THE CAPSULE CURATION",
      collection: "01 / FORM — SS 2026",
      material: "Curated Natural Palette: Linen, Raw Cotton, Silk Twill",
      color: "Olive, Ecru, Chalk, Charcoal",
      fit: "Interchangeable wardrobe system",
      year: "2026",
      concept: "Một tủ đồ tinh giản, nơi mọi thiết kế đều có thể phối lớp (layering) nhịp nhàng cùng nhau. Tôn vinh tính bền vững và sự trường tồn qua năm tháng thay vì chạy theo chu kỳ thời trang nhanh.",
      image: "assets/images/col_garment_rack.jpg",
      tags: ["Curated Wardrobe", "Sustainable Concept"]
    },
    shoulder: {
      id: "shoulder",
      number: "07",
      category: "dresses",
      categoryName: "Đầm dạ hội lụa",
      name: "BIAS-CUT NOCTURNAL SILK CAMISOLE",
      collection: "01 / FORM — SS 2026",
      material: "100% Heavy Mulberry Silk Charmeuse",
      color: "Deep Shadow Black",
      fit: "Bias-cut drape, micro-rouleau shoulder straps, low scoop back",
      year: "2026",
      concept: "Kỹ thuật cắt xéo canh sợi (bias cut) bậc thầy cho phép thớ lụa ôm trọn lấy đường cong cơ thể một cách tự nhiên nhất mà không cần đường chiết gò bó. Sự gợi cảm thanh lịch và kín đáo.",
      image: "assets/images/detail_bare_shoulder.jpg",
      tags: ["Evening", "Mulberry Silk", "Bias Cut"]
    }
  },

  // 5 bài viết Nhật ký học tập & Sáng tác dự án
  journal: {
    title: "NHẬT KÝ HỌC TẬP & SÁNG TÁC",
    subtitle: "Project Journal & Learning Log — Hành trình từ ý tưởng đến đồ án hoàn thiện của Nguyễn Thị Thanh Lam.",
    categories: [
      { id: "all", name: "Tất Cả" },
      { id: "fashion-project", name: "Dự Án Thời Trang" },
      { id: "tech-ecommerce", name: "TMĐT & Công Nghệ" },
      { id: "teamwork-communication", name: "Bài Tập Nhóm & Giao Tiếp" },
      { id: "skills-english", name: "Kỹ Năng & Tiếng Anh" }
    ],
    articles: [
      {
        id: "jnl-1",
        category: "fashion-project",
        categoryName: "Dự Án Thời Trang",
        tag: "PROJECT & UI/UX DESIGN",
        date: "24 THÁNG 09, 2026",
        readTime: "6 PHÚT ĐỌC",
        title: "HÀNH TRÌNH XÂY DỰNG Ý TƯỞNG & THIẾT KẾ GIAO DIỆN THANH LAM LUXURY",
        image: "assets/images/journal_studio_desk.jpg",
        excerpt: "Từ những buổi nghiên cứu xu hướng Thương mại điện tử cao cấp đến việc lựa chọn bảng màu be-nâu tự nhiên, xây dựng bản sắc Quiet Luxury và trực quan hóa trải nghiệm khách hàng.",
        content: `
          <p class="journal-lead">Ý tưởng về <strong>Thanh Lam Luxury</strong> bắt đầu từ một câu hỏi trong giờ học Thương mại điện tử: <em>Làm thế nào để một trang web thời trang không chỉ đơn thuần là nơi mua sắm, mà còn truyền tải được cảm xúc tĩnh lặng, chiều sâu văn hóa và phong cách Haute Couture tinh tế?</em></p>
          
          <h4 class="font-serif">1. Nghiên cứu thị trường và định vị thương hiệu</h4>
          <p>Trên thị trường hiện nay, đa phần các sàn TMĐT đều ngập tràn banner quảng cáo rực rỡ, đồng hồ đếm ngược giảm giá và nút mua hàng hối hả. Tôi muốn đi ngược lại dòng chảy thời trang nhanh đó để tìm về bản chất của <strong>Quiet Luxury</strong> — sự sang trọng không cần phô trương. Tôi đã dành 2 tuần phân tích các thương hiệu quốc tế tiêu biểu như The Row, Lemaire, Brunello Cucinelli để học hỏi cách họ kể chuyện bằng chất liệu tự nhiên, ánh sáng mềm và khoảng trắng thở của giao diện.</p>
          
          <h4 class="font-serif">2. Lựa chọn ngôn ngữ thiết kế Editorial</h4>
          <p>Tôi đã chọn bảng màu trung tính tự nhiên: sắc be ngà (#F6F5EF), nâu đất ấm (#5E5B54), xanh rêu cổ điển (#4A6B3A) và đen tuyền sang trọng. Typography được phối hợp giữa kiểu chữ có chân cổ điển <em>Cormorant Garamond</em> gợi nhớ đến những trang bìa tạp chí Vogue, cùng với <em>Plus Jakarta Sans</em> hiện đại, rõ ràng trên màn hình điện thoại thông minh.</p>
          
          <blockquote class="journal-quote">
            &ldquo;Một giao diện thương mại điện tử xuất sắc không phải là giao diện có nhiều hiệu ứng nhất, mà là giao diện giúp khách hàng cảm nhận được sự tôn trọng và yên bình trong từng cú chạm lướt.&rdquo;
          </blockquote>

          <h4 class="font-serif">3. Bài học kinh nghiệm rút ra</h4>
          <div class="journal-takeaway">
            <strong>BÀI HỌC RÚT RA (KEY TAKEAWAY):</strong>
            <ul>
              <li>Thiết kế phải phục vụ cảm xúc người dùng (Emotional UI).</li>
              <li>Kiên định với định vị Quiet Luxury giúp sản phẩm nổi bật giữa thị trường thời trang nhanh.</li>
              <li>Sự kết hợp giữa tư duy kinh doanh TMĐT và mắt thẩm mỹ nghệ thuật là chìa khóa để tạo nên một đồ án khác biệt.</li>
            </ul>
          </div>
        `
      },
      {
        id: "jnl-2",
        category: "teamwork-communication",
        categoryName: "Bài Tập Nhóm & Giao Tiếp",
        tag: "TEAMWORK & PRESENTATION",
        date: "18 THÁNG 09, 2026",
        readTime: "5 PHÚT ĐỌC",
        title: "BÀI HỌC TỪ LÀM VIỆC NHÓM, PHÂN CHIA CÔNG VIỆC VÀ THUYẾT TRÌNH GIẢNG ĐƯỜNG",
        image: "assets/images/col_garment_rack.jpg",
        excerpt: "Cách lắng nghe ý kiến của từng thành viên, phân chia vai trò rõ ràng theo thế mạnh và sự chuyển mình từ một sinh viên rụt rè sang người tự tin làm chủ sân khấu thuyết trình.",
        content: `
          <p class="journal-lead">Làm việc nhóm luôn là một trong những thử thách lớn nhất trong môi trường đại học. Khi bắt đầu môn học với một nhóm 5 thành viên có cá tính và chuyên môn khác nhau, tôi từng rất lo lắng về sự bất đồng quan điểm.</p>
          
          <h4 class="font-serif">1. Phân chia công việc theo thế mạnh (Strengths-based Allocation)</h4>
          <p>Thay vì phân công máy móc theo danh sách công việc, nhóm chúng tôi đã có một buổi họp mở để từng bạn chia sẻ sở trường của mình: người giỏi tìm kiếm tài liệu thị trường, người am hiểu công nghệ lập trình, người mạnh về viết kịch bản nội dung. Tôi đảm nhận vai trò kết nối, phụ trách phần ý tưởng thương hiệu, thiết kế thẩm mỹ và chuẩn bị bài thuyết trình chung.</p>
          
          <h4 class="font-serif">2. Vượt qua nỗi sợ đứng trước giảng đường</h4>
          <p>Trước đây, tôi từng rất e ngại mỗi khi phải cầm micro phát biểu trước hàng chục sinh viên và giảng viên. Tim đập nhanh, giọng nói run run là những cảm giác quen thuộc. Để chuẩn bị cho buổi báo cáo giữa kỳ, tôi đã luyện tập thuyết trình trước gương mỗi ngày, ghi âm lại giọng nói để điều chỉnh nhịp thở, và cùng nhóm phản biện thử các câu hỏi hóc búa của thầy cô.</p>
          
          <blockquote class="journal-quote">
            &ldquo;Sự tự tin không tự nhiên sinh ra, nó là kết quả của sự chuẩn bị kỹ lưỡng và lòng dũng cảm bước qua vùng an toàn.&rdquo;
          </blockquote>

          <h4 class="font-serif">3. Thành quả và lời cảm ơn</h4>
          <p>Buổi thuyết trình đã diễn ra thành công vượt mong đợi. Nhóm nhận được lời khen từ giảng viên về tính đồng bộ của đồ án và sự gắn kết giữa các thành viên. Đó là động lực vô cùng lớn để tôi tin tưởng hơn vào năng lực của bản thân.</p>

          <div class="journal-takeaway">
            <strong>BÀI HỌC RÚT RA (KEY TAKEAWAY):</strong>
            <ul>
              <li>Giao tiếp cởi mở và tôn trọng sự khác biệt là nền tảng của một tập thể vững mạnh.</li>
              <li>Thuyết trình giỏi không phải là nói hoa mỹ, mà là truyền tải thông điệp bằng sự chân thành và hiểu biết sâu sắc.</li>
              <li>Biết lắng nghe và hỗ trợ đồng đội giúp cả nhóm cùng tiến xa hơn.</li>
            </ul>
          </div>
        `
      },
      {
        id: "jnl-3",
        category: "teamwork-communication",
        categoryName: "Bài Tập Nhóm & Giao Tiếp",
        tag: "BUSINESS COMMUNICATION",
        date: "10 THÁNG 09, 2026",
        readTime: "5 PHÚT ĐỌC",
        title: "PHÂN TÍCH TÌNH HUỐNG GIAO TIẾP TRONG KINH DOANH & TRẢI NGHIỆM KHÁCH HÀNG CAO CẤP",
        image: "assets/images/col_portrait_natural.jpg",
        excerpt: "Phân tích các tình huống xử lý phản hồi khách hàng trong môi trường bán lẻ thời trang cao cấp. Nghệ thuật thấu cảm, giao tiếp phi ngôn ngữ và xây dựng lòng trung thành thương hiệu.",
        content: `
          <p class="journal-lead">Trong môn Kỹ năng Giao tiếp Kinh doanh, nhóm chúng tôi được giao đề tài phân tích các tình huống xử lý khủng hoảng dịch vụ và chăm sóc khách hàng trong phân khúc thời trang cao cấp.</p>
          
          <h4 class="font-serif">1. Bài toán tình huống: Khi khách hàng VIP không hài lòng</h4>
          <p>Tình huống giả định đặt ra: Một khách hàng đặt may trang phục lụa thiết kế riêng cho buổi dạ tiệc quan trọng, nhưng khi nhận hàng thì đường may viền cổ không đạt độ ôm mong muốn và thời gian giao chậm 1 ngày. Làm thế nào để giải quyết mà không làm mất đi uy tín thương hiệu?</p>
          
          <h4 class="font-serif">2. Nguyên tắc 4 bước xử lý chuyên nghiệp</h4>
          <p>Chúng tôi đã xây dựng quy trình giải quyết chuẩn mực:</p>
          <ul style="margin: 0.75rem 0 1.25rem 1.5rem; line-height: 1.8;">
            <li><strong>Lắng nghe chủ động (Active Listening):</strong> Không ngắt lời, ghi nhận trọn vẹn cảm xúc thất vọng của khách hàng với thái độ cầu thị chân thành.</li>
            <li><strong>Xin lỗi thấu cảm (Empathetic Apology):</strong> Thừa nhận thiếu sót một cách trung thực, không đổ lỗi cho khâu vận chuyển hay kỹ thuật viên.</li>
            <li><strong>Hành động khắc phục ngay lập tức (Immediate Action):</strong> Cử thợ may chính đến tận nơi chỉnh sửa trực tiếp trong vòng 3 giờ, tặng kèm khăn lụa tơ tằm thủ công như lời tạ lỗi tinh tế.</li>
            <li><strong>Chăm sóc hậu mãi (Follow-up Care):</strong> Gửi thư cảm ơn viết tay sau sự kiện để lắng nghe phản hồi về trải nghiệm khi diện trang phục.</li>
          </ul>

          <blockquote class="journal-quote">
            &ldquo;Khách hàng cao cấp không chỉ mua một bộ quần áo, họ mua sự an tâm, phẩm giá và sự trân trọng được chăm sóc chu đáo.&rdquo;
          </blockquote>

          <div class="journal-takeaway">
            <strong>BÀI HỌC RÚT RA (KEY TAKEAWAY):</strong>
            <ul>
              <li>Một tình huống phàn nàn được giải quyết xuất sắc chính là cơ hội vàng để biến khách hàng khó tính thành đại sứ thương hiệu trung thành nhất.</li>
              <li>Giao tiếp phi ngôn ngữ (ánh mắt, nụ cười, tư thế) chiếm hơn 70% hiệu quả trong dịch vụ khách hàng trực tiếp.</li>
            </ul>
          </div>
        `
      },
      {
        id: "jnl-4",
        category: "tech-ecommerce",
        categoryName: "TMĐT & Công Nghệ",
        tag: "TECHNOLOGY & E-COMMERCE",
        date: "02 THÁNG 09, 2026",
        readTime: "7 PHÚT ĐỌC",
        title: "ỨNG DỤNG CÔNG NGHỆ VÀ TƯ DUY THƯƠNG MẠI ĐIỆN TỬ TRONG NGÀNH THỜI TRANG HIỆN ĐẠI",
        image: "assets/images/col_look2_olive_blazer.jpg",
        excerpt: "Tận dụng chuyển đổi số, tối ưu hóa hành trình mua sắm trên thiết bị di động, kiến trúc dữ liệu và nghệ thuật kể chuyện thị giác (Visual Storytelling) trong thương mại điện tử xa xỉ.",
        content: `
          <p class="journal-lead">Thương mại điện tử không chỉ là lập trình một giỏ hàng hay cổng thanh toán. Trong ngành thời trang cao cấp, công nghệ đóng vai trò là một người dẫn chuyện thầm lặng, dẫn dắt khách hàng qua từng cảm xúc thẩm mỹ.</p>
          
          <h4 class="font-serif">1. Tư duy Mobile-First và Tốc độ tải trang</h4>
          <p>Hơn 78% khách hàng yêu thích thời trang khám phá bộ sưu tập thông qua điện thoại thông minh (smartphone). Do đó, khi phát triển website Thanh Lam Luxury, tôi luôn đặt tính mượt mà trên di động lên hàng đầu: hình ảnh được tối ưu hóa chuẩn nén, bố cục CSS Grid tự co giãn thông minh, thanh điều hướng Drawer dạng trượt chạm mở nhẹ nhàng không giật lag.</p>
          
          <h4 class="font-serif">2. Lưu trữ dữ liệu tương tác với LocalStorage</h4>
          <p>Tôi đã áp dụng kỹ thuật <code>localStorage</code> để lưu trữ lịch sử tin nhắn liên hệ, các thiết kế yêu thích mà không cần cấu hình cơ sở dữ liệu cồng kềnh. Điều này vừa giúp trang web chạy cực nhanh, vừa bảo vệ tính riêng tư của người sử dụng.</p>
          
          <h4 class="font-serif">3. Nghệ thuật kể chuyện thị giác (Visual Storytelling)</h4>
          <p>Thay vì trình bày sản phẩm thành các ô vuông đơn điệu, tôi áp dụng bố cục Editorial Asymmetric (bất đối xứng) như tạp chí thời trang cao cấp. Mỗi tác phẩm đều đi kèm ý niệm thiết kế, chất liệu sợi dệt, form dáng và những khung ảnh giàu chất thơ.</p>

          <div class="journal-takeaway">
            <strong>BÀI HỌC RÚT RA (KEY TAKEAWAY):</strong>
            <ul>
              <li>Công nghệ là công cụ đắc lực hiện thực hóa các ý tưởng kinh doanh sáng tạo.</li>
              <li>Trải nghiệm người dùng (UX) liền mạch chính là yếu tố quyết định tỷ lệ chuyển đổi trong thương mại điện tử.</li>
              <li>Sinh viên kinh doanh hiện đại nhất định phải trang bị tư duy công nghệ số vững vàng.</li>
            </ul>
          </div>
        `
      },
      {
        id: "jnl-5",
        category: "skills-english",
        categoryName: "Kỹ Năng & Tiếng Anh",
        tag: "LANGUAGE & SELF-GROWTH",
        date: "25 THÁNG 08, 2026",
        readTime: "5 PHÚT ĐỌC",
        title: "HÀNH TRÌNH TRAU DỒI TIẾNG ANH: VƯỢT QUA SỰ RỤT RÈ ĐỂ TỰ TIN HƠN MỖI NGÀY",
        image: "assets/images/thanhlam_portrait_white.jpg",
        excerpt: "Từng là một cô sinh viên e ngại khi phải nói tiếng Anh trước đám đông, tôi đã tìm ra phương pháp học qua tài liệu chuyên ngành thời trang - kinh doanh quốc tế và rèn luyện sự tự tin ra sao.",
        content: `
          <p class="journal-lead">Có lẽ rất nhiều bạn sinh viên cũng từng có chung cảm giác như tôi: hiểu được ngữ pháp, đọc hiểu văn bản khá tốt, nhưng mỗi khi phải mở lời giao tiếp bằng tiếng Anh thì lại cảm thấy ngập ngừng và sợ phát âm sai.</p>
          
          <h4 class="font-serif">1. Bắt đầu từ đam mê cá nhân</h4>
          <p>Bước ngoặt đến khi tôi quyết định học tiếng Anh không phải để đối phó với các kỳ thi cử, mà để thỏa mãn niềm đam mê với thời trang và thương mại quốc tế. Tôi bắt đầu đọc các bài báo trên Business of Fashion (BoF), Vogue Runway, theo dõi các cuộc phỏng vấn những nhà thiết kế độc lập và ghi chú lại từ vựng chuyên ngành về vải vóc, phom dáng và chiến lược kinh doanh.</p>
          
          <h4 class="font-serif">2. Thói quen nhỏ mỗi ngày (Micro-Habits)</h4>
          <p>Mỗi buổi sáng, tôi dành 20 phút nghe podcast tiếng Anh về kinh doanh và lặp lại theo phương pháp Shadowing để rèn luyện ngữ điệu. Trong nhóm học tập, tôi chủ động nhận phần dịch thuật tài liệu tham khảo nước ngoài để làm quen với các thuật ngữ học thuật.</p>
          
          <blockquote class="journal-quote">
            &ldquo;Tiếng Anh không phải là một bài kiểm tra để sợ điểm kém, tiếng Anh là cánh cửa mở ra cả một thế giới tri thức và cơ hội rộng lớn.&rdquo;
          </blockquote>

          <h4 class="font-serif">3. Chuyển hóa từ rụt rè sang tự tin</h4>
          <p>Giờ đây, tôi đã có thể tự tin tra cứu các tài liệu quốc tế phục vụ cho đồ án website, viết các thuật ngữ chuyên ngành thời trang bằng tiếng Anh chuẩn xác và hào hứng giao lưu trong các buổi học có giảng viên nước ngoài.</p>

          <div class="journal-takeaway">
            <strong>BÀI HỌC RÚT RA (KEY TAKEAWAY):</strong>
            <ul>
              <li>Học ngôn ngữ thông qua đam mê thực tế giúp duy trì động lực bền bỉ nhất.</li>
              <li>Đừng sợ mắc lỗi; sự tiến bộ được đo bằng lòng kiên trì mỗi ngày, không phải sự hoàn hảo tức thì.</li>
              <li>Ngoại ngữ vững vàng là chìa khóa vàng cho hành trình hội nhập nghề nghiệp tương lai.</li>
            </ul>
          </div>
        `
      }
    ]
  },

  // 5 mốc tiến độ thực hiện đồ án (Project Milestones)
  milestones: [
    {
      step: "01",
      phase: "GIAI ĐOẠN 01",
      time: "Tháng 07 / 2026",
      title: "Khảo Sát Thị Trường & Định Vị Ý Tưởng",
      desc: "Nghiên cứu thị trường thời trang thiết kế nữ tại Việt Nam; phân tích xu hướng Quiet Luxury & Haute Couture; xác định đối tượng khách hàng mục tiêu yêu thích sự tối giản và chất liệu sợi tự nhiên."
    },
    {
      step: "02",
      phase: "GIAI ĐOẠN 02",
      time: "Tháng 08 / 2026",
      title: "Lập Kế Hoạch Đồ Án & Kiến Trúc Thông Tin",
      desc: "Xây dựng sơ đồ trang web (Sitemap) hoàn chỉnh gồm 6 phân hệ chính; phác thảo Wireframe bố cục Editorial; lên kế hoạch phân công công việc nhóm và phân bổ thời gian chi tiết."
    },
    {
      step: "03",
      phase: "GIAI ĐOẠN 03",
      time: "Cuối Tháng 08 / 2026",
      title: "Thiết Kế Bản Sắc Thị Giác & Nội Dung",
      desc: "Lựa chọn bảng màu trung tính nhã nhặn; thiết lập hệ thống Typography Cormorant & Playfair; biên soạn nội dung giới thiệu bản thân Nguyễn Thị Thanh Lam và tư liệu sản phẩm."
    },
    {
      step: "04",
      phase: "GIAI ĐOẠN 04",
      time: "Đầu Tháng 09 / 2026",
      title: "Lập Trình Giao Diện & Tối Ưu Tương Tác",
      desc: "Triển khai mã nguồn HTML5, CSS3 Grid mượt mà và JavaScript tương tác; tích hợp bộ lọc bài viết, cửa sổ đọc chi tiết modal, form liên hệ lưu trữ LocalStorage và hiệu ứng Toast."
    },
    {
      step: "05",
      phase: "GIAI ĐOẠN 05",
      time: "Tháng 09 / 2026",
      title: "Kiểm Thử Nhóm, Hoàn Thiện & Báo Cáo",
      desc: "Kiểm tra tính tương thích Responsive trên Desktop, Tablet, Mobile; viết nhật ký học tập tổng kết kinh nghiệm; chuẩn bị slide thuyết trình và hoàn tất đồ án báo cáo trước giảng đường."
    }
  ],

  // 4 Câu hỏi thường gặp (FAQ) cho trang Liên Hệ & Đồ án
  faqs: [
    {
      id: "faq-1",
      question: "Đồ án website thời trang Thanh Lam Luxury được thực hiện nhằm mục đích gì?",
      answer: "Đồ án được thực hiện bởi sinh viên Nguyễn Thị Thanh Lam trong khuôn khổ các môn học về Thương mại điện tử, Kỹ năng Giao tiếp và Dự án Học tập. Mục tiêu là kết hợp kiến thức kinh doanh hiện đại với nghệ thuật thiết kế giao diện cao cấp (Haute Couture / Quiet Luxury), tạo nên một sản phẩm học thuật chỉn chu, có tính ứng dụng thực tế cao."
    },
    {
      id: "faq-2",
      question: "Triết lý 'Quiet Luxury' trong dự án được thể hiện qua những yếu tố nào?",
      answer: "Quiet Luxury (Sự sang trọng thầm lặng) được thể hiện xuyên suốt qua 3 yếu tố: Chất liệu tự nhiên thuần khiết (Linen dệt mộc, Lụa tơ tằm nguyên bản); Bố cục giao diện tạp chí thời trang rộng mở, thoáng đãng không xô bồ; và Tôn trọng nhịp điệu sống tự nhiên của người phụ nữ hiện đại."
    },
    {
      id: "faq-3",
      question: "Website này được xây dựng bằng những công nghệ nào?",
      answer: "Website được phát triển hoàn toàn bằng công nghệ Web chuẩn mực: HTML5 ngữ nghĩa cao, CSS3 hiện đại (CSS Grid, Flexbox, CSS Variables, Responsive Viewport) và Vanilla JavaScript thuần túy không phụ thuộc thư viện nặng nề. Dữ liệu tin nhắn liên hệ được lưu trữ an toàn ngay trên LocalStorage của trình duyệt."
    },
    {
      id: "faq-4",
      question: "Tôi có thể liên hệ trao đổi học tập hoặc hợp tác với bạn Thanh Lam qua đâu?",
      answer: "Bạn có thể gửi tin nhắn trực tiếp qua form tại trang Liên Hệ, gửi email về hòm thư cá nhân nguyenthithanhlam.contact@gmail.com, hoặc kết nối qua các kênh mạng xã hội Instagram và TikTok được tích hợp ở đầu và chân trang. Mọi lời nhắn sẽ được phản hồi chân thành trong vòng 24 giờ."
    }
  ],

  // Tuyển tập Lookbook (giữ lại và tích hợp mượt mà)
  lookbook: {
    title: "THE LOOKBOOK",
    subtitle: "Moments, moods, and everyday beauty.",
    season: "SPRING / SUMMER 2026",
    intro: "Ghi lại những khoảnh khắc tĩnh lặng giữa nhịp đập thành thị cổ kính, nơi ánh hoàng hôn rọi sáng những thớ vải linen bồng bềnh.",
    heroImage: "assets/images/lookbook_balcony_sunset.jpg",
    items: [
      {
        id: "look-01",
        title: "Look 01 — Golden Hour in the Ancient City",
        desc: "Đầm hai dây linen xanh olive trên nền ban công đá cổ, đón ánh chiều buông rủ êm đềm.",
        image: "assets/images/lookbook_balcony_sunset.jpg",
        caption: "Olive Linen Slip Dress, Florence Sunlight"
      },
      {
        id: "look-02",
        title: "Look 02 — Architectural Silhouette",
        desc: "Bộ đồ hai mảnh màu ngà tương phản với mảng tường bê tông góc cạnh.",
        image: "assets/images/col_form_concrete_steps.jpg",
        caption: "Sandstone Two-Piece Set, Brutalist Steps"
      },
      {
        id: "look-03",
        title: "Look 03 — Organic Freedom",
        desc: "Váy maxi linen thô màu trắng ngà tung bay nhẹ nhàng theo từng bước chân.",
        image: "assets/images/hero_model_dress.jpg",
        caption: "Natural Ivory Slip Maxi Dress"
      },
      {
        id: "look-04",
        title: "Look 04 — Dappled Sunlit Path",
        desc: "Sơ mi linen màu rêu mộc mạc và túi canvas mộc, hòa mình vào bóng lá tường đá.",
        image: "assets/images/hero_green_walk.jpg",
        caption: "Olive Oversized Shirt, Stone Wall Alley"
      }
    ]
  },

  // Dự án sáng tác tiêu biểu
  projects: [
    {
      id: "proj-1",
      number: "DỰ ÁN 01",
      title: "THANH LAM LUXURY WEB PLATFORM",
      subtitle: "Hệ thống Website & Hồ sơ Thương hiệu Thời trang Độc lập",
      role: "Trưởng nhóm ý tưởng, Nghiên cứu TMĐT & Thiết kế UI/UX",
      concept: "Xây dựng nền tảng thương hiệu thời trang độc lập định hình theo phong cách Quiet Luxury; nghiên cứu hành vi khách hàng mua sắm cao cấp và trực quan hóa bằng giao diện Editorial.",
      image: "assets/images/project_concrete_walk.jpg",
      credits: "Thực hiện: Nguyễn Thị Thanh Lam & Nhóm Đồ án Học tập"
    },
    {
      id: "proj-2",
      number: "DỰ ÁN 02",
      title: "CHIẾN DỊCH HÌNH ẢNH: FORM SS2026",
      subtitle: "Cấu Trúc Tự Nhiên & Ánh Sáng Thường Nhật",
      role: "Định hướng ý niệm nghệ thuật & Lựa chọn trang phục",
      concept: "Tuyển tập hình ảnh khai thác vẻ đẹp của chất liệu lanh mộc mạc và lụa tơ tằm trong không gian kiến trúc đương đại.",
      image: "assets/images/hero_green_walk.jpg",
      credits: "Art Direction: Thanh Lam / Styling & Visuals: Team Studio"
    },
    {
      id: "proj-3",
      number: "DỰ ÁN 03",
      title: "NGHIÊN CỨU DỊCH VỤ KHÁCH HÀNG CAO CẤP",
      subtitle: "Nghệ Thuật Giao Tiếp & Xử Lý Tình Huống TMĐT",
      role: "Phân tích tình huống & Thuyết trình chuyên đề",
      concept: "Đề tài nghiên cứu ứng dụng kỹ năng giao tiếp thấu cảm và chăm sóc khách hàng cá nhân hóa trong bán lẻ thời trang thiết kế.",
      image: "assets/images/col_portrait_natural.jpg",
      credits: "Môn học: Kỹ năng Giao tiếp & Đàm phán Kinh doanh"
    }
  ]
};
