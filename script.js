document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-btn');

  // ===== 1. 分類按鈕切換邏輯 =====
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 移除所有按鈕的 active 狀態
      navButtons.forEach(btn => btn.classList.remove('active'));
      // 當前點擊的按鈕加入 active
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');

      // 切換顯示對應類別的照片
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (itemCategory === selectedCategory) {
          item.classList.remove('hidden');
          // 增加淡入微動畫效果
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ===== 2. 照片放大檢視功能 (Lightbox) =====
  const photoCards = document.querySelectorAll('.photo-card img');

  photoCards.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  // 點擊關閉按鈕或背景關閉大圖
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
  }
});
