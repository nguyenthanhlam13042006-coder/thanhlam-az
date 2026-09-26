/* ==========================================================================
   THANH LAM LUXURY — MAIN JAVASCRIPT
   Tác giả: Nguyễn Thị Thanh Lam
   Interactions, Journal Filter, Full-article Modal, Contact Storage, FAQ
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initContactForm();
  initModalInteractions();
  initJournalFilters();
  initFaqAccordion();
  initProductFilters();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const openBtn = document.getElementById('openMenuBtn');
  const closeBtn = document.getElementById('closeMenuBtn');
  const overlay = document.getElementById('mobileOverlay');
  const drawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!openBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   2. Header Scroll Effect & Active Track
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Modal & Lightbox Infrastructure
   -------------------------------------------------------------------------- */
let modalBackdrop = null;
let modalContent = null;
let modalCloseBtn = null;

function initModalInteractions() {
  modalBackdrop = document.getElementById('editorialModal');
  modalContent = document.getElementById('modalDynamicContent');
  modalCloseBtn = document.getElementById('modalCloseBtn');

  if (!modalBackdrop) return;

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal(htmlContent) {
  if (!modalBackdrop) modalBackdrop = document.getElementById('editorialModal');
  if (!modalContent) modalContent = document.getElementById('modalDynamicContent');
  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = htmlContent;
  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalBackdrop) modalBackdrop = document.getElementById('editorialModal');
  if (!modalBackdrop) return;

  modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

window.closeModal = closeModal;
window.openModal = openModal;

/* --------------------------------------------------------------------------
   4. Journal Category Filter
   -------------------------------------------------------------------------- */
function initJournalFilters() {
  const filterBtns = document.querySelectorAll('.journal-filter-btn');
  const articles = document.querySelectorAll('.journal-card');

  if (!filterBtns.length || !articles.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      articles.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Open Full Journal Article Modal
   -------------------------------------------------------------------------- */
window.openJournalArticleModal = function(articleId) {
  if (!PORTFOLIO_DATA || !PORTFOLIO_DATA.journal) return;
  const art = PORTFOLIO_DATA.journal.articles.find(a => a.id === articleId);
  if (!art) return;

  const html = `
    <article class="article-modal-container">
      <div class="article-modal-meta">
        <span class="article-category-badge">${art.tag}</span>
        <span class="article-read-info">${art.date} &bull; ${art.readTime}</span>
      </div>

      <h1 class="article-modal-title font-serif">${art.title}</h1>
      
      <div class="article-author-tag">
        <div class="author-avatar-mini">
          <img src="assets/images/thanhlam_portrait_white.jpg" alt="Nguyễn Thị Thanh Lam">
        </div>
        <div class="author-info-mini">
          <strong>Nguyễn Thị Thanh Lam</strong>
          <span>Sinh viên & Tác giả đồ án Thanh Lam Luxury</span>
        </div>
      </div>

      <div class="article-modal-image">
        <img src="${art.image}" alt="${art.title}">
      </div>

      <div class="article-modal-body">
        ${art.content}
      </div>

      <div class="article-modal-footer">
        <p class="font-serif italic">&ldquo;Cảm ơn bạn đã đọc bài chia sẻ trong nhật ký đồ án của tôi.&rdquo;</p>
        <button type="button" class="editorial-btn" onclick="closeModal()">ĐÓNG BÀI VIẾT &times;</button>
      </div>
    </article>
  `;

  openModal(html);
};

/* --------------------------------------------------------------------------
   6. Contact Form Handling (Validation, LocalStorage & Toast)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastMsg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const phoneInput = document.getElementById('userPhone');
    const purposeInput = document.getElementById('contactPurpose');
    const subjectInput = document.getElementById('msgSubject');
    const msgInput = document.getElementById('userMsg');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : 'Chưa cung cấp';
    const purpose = purposeInput ? purposeInput.value : 'Trao đổi chung';
    const subject = subjectInput ? subjectInput.value.trim() : 'Liên hệ từ website';
    const msg = msgInput ? msgInput.value.trim() : '';

    if (!name || !email || !msg) {
      alert('Vui lòng điền đầy đủ Họ tên, Email và Lời nhắn.');
      return;
    }

    // Save message to localStorage
    const messageObject = {
      id: 'msg_' + Date.now(),
      name,
      email,
      phone,
      purpose,
      subject,
      msg,
      timestamp: new Date().toLocaleString('vi-VN')
    };

    try {
      const existing = JSON.parse(localStorage.getItem('thanhlam_contact_messages') || '[]');
      existing.unshift(messageObject);
      localStorage.setItem('thanhlam_contact_messages', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    // Show refined Toast
    if (toast) {
      toast.innerHTML = `<strong>Thành công!</strong> Cảm ơn <em>${name}</em>. Lời nhắn của bạn đã được ghi nhận. Thanh Lam sẽ phản hồi qua email <em>${email}</em> sớm nhất.`;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 6000);
    }

    // Open Thank-You Modal
    const thankModalHtml = `
      <div style="text-align: center; padding: 2.5rem 1.5rem;">
        <span class="subpage-tag" style="display: block; margin-bottom: 0.5rem;">XÁC NHẬN GỬI TIN NHẮN THÀNH CÔNG</span>
        <h2 class="font-serif" style="font-size: 2rem; margin-bottom: 1rem; color: var(--accent);">CẢM ƠN BẠN ĐÃ KẾT NỐI!</h2>
        <div style="width: 40px; height: 1px; background: var(--accent); margin: 0 auto 1.5rem;"></div>
        <p style="font-size: 1rem; line-height: 1.8; color: var(--text-muted); max-width: 500px; margin: 0 auto 1.5rem;">
          Xin chào <strong>${name}</strong>, lời nhắn với chủ đề <em>"${subject}"</em> đã được chuyển tới hộp thư của <strong>Nguyễn Thị Thanh Lam</strong>.
        </p>
        <p style="font-size: 0.85rem; color: var(--text-light); line-height: 1.6; margin-bottom: 2rem;">
          Thư xác nhận sẽ được gửi đến hòm mail: <strong>${email}</strong>.<br>
          Chúc bạn một ngày tràn đầy năng lượng tích cực!
        </p>
        <button type="button" class="editorial-btn" onclick="closeModal()">HOÀN TẤT &times;</button>
      </div>
    `;
    openModal(thankModalHtml);

    form.reset();
  });
}

/* --------------------------------------------------------------------------
   7. FAQ Accordion Interaction
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-question');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      // Close others
      faqItems.forEach(i => i.classList.remove('active'));
      // Toggle current
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Product Filters (For products.html)
   -------------------------------------------------------------------------- */
function initProductFilters() {
  const filterBtns = document.querySelectorAll('.product-filter-btn');
  const productCards = document.querySelectorAll('.product-grid-card');

  if (!filterBtns.length || !productCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   9. Piece Detail Modal (Product Spec)
   -------------------------------------------------------------------------- */
window.openPieceModal = function(pieceKey) {
  if (!PORTFOLIO_DATA || !PORTFOLIO_DATA.pieces) return;
  const piece = PORTFOLIO_DATA.pieces[pieceKey];
  if (!piece) return;

  const html = `
    <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 2.5rem; align-items: start;">
      <div style="background-color: #E6E2D8; overflow: hidden; border-radius: 2px;">
        <img src="${piece.image}" alt="${piece.name}" style="width: 100%; height: auto; max-height: 580px; object-fit: cover;">
      </div>
      <div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem;">
          <span style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--accent); letter-spacing: 0.15em;">
            ${piece.number}
          </span>
          <span style="font-size: 0.72rem; letter-spacing: 0.15em; color: var(--text-light); text-transform: uppercase;">
            ${piece.collection}
          </span>
        </div>

        <h2 style="font-family: var(--font-serif); font-size: 1.75rem; letter-spacing: 0.08em; line-height: 1.2; margin-bottom: 1.5rem; color: var(--text-primary);">
          ${piece.name}
        </h2>

        <div style="border-top: 1px solid var(--neutral-border); padding: 1.25rem 0; display: flex; flex-direction: column; gap: 0.95rem; font-size: 0.82rem;">
          <div>
            <strong style="letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.7rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">
              CHẤT LIỆU (MATERIAL)
            </strong>
            <span style="color: var(--text-primary);">${piece.material}</span>
          </div>

          <div>
            <strong style="letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.7rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">
              MÀU SẮC (COLOR)
            </strong>
            <span style="color: var(--text-primary);">${piece.color}</span>
          </div>

          <div>
            <strong style="letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.7rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">
              PHOM DÁNG (FIT & CUT)
            </strong>
            <span style="color: var(--text-primary);">${piece.fit}</span>
          </div>

          <div>
            <strong style="letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.7rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">
              NĂM SÁNG TÁC (YEAR)
            </strong>
            <span style="color: var(--text-primary);">${piece.year}</span>
          </div>
        </div>

        <div style="border-top: 1px solid var(--neutral-border); padding-top: 1.25rem; margin-top: 0.5rem;">
          <strong style="letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.7rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">
            Ý NIỆM THIẾT KẾ (DESIGN CONCEPT)
          </strong>
          <p style="font-family: var(--font-serif); font-style: italic; font-size: 1.05rem; line-height: 1.6; color: var(--text-primary);">
            &ldquo;${piece.concept}&rdquo;
          </p>
        </div>

        <div style="margin-top: 2rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${piece.tags ? piece.tags.map(t => `<span style="font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; background: var(--bg-card); padding: 0.35rem 0.75rem; border: 1px solid var(--neutral-border);">${t}</span>`).join('') : ''}
        </div>
      </div>
    </div>
  `;
  openModal(html);
};
