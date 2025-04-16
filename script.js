// modal_script.js dosyasının içeriği:
document.addEventListener('DOMContentLoaded', () => {
    // --- KATEGORİ AÇMA/KAPAMA KODU ---
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', () => {
            console.log("Başlık tıklandı:", header);
            const unitList = header.nextElementSibling;
            const chevron = header.querySelector('.fa-chevron-down');

            if (unitList) {
                unitList.classList.toggle('open');
            } else {
                console.error("Hemen sonraki unitList bulunamadı:", header);
            }
            if (chevron) {
                chevron.classList.toggle('rotate-180');
            } else {
                console.error("Chevron ikonu bulunamadı:", header);
            }
        });
    });

    // --- KATEGORİ/BİRİM SEÇME KODU ---
    document.querySelectorAll('.category-header, .unit-list div').forEach(item => {
        item.addEventListener('click', function() {
            // Önceki seçimleri kaldır
            document.querySelectorAll('.category-header, .unit-list div').forEach(el => {
                el.classList.remove('bg-purple-50', 'text-purple-700');
            });
            // Seçim stilini ekle
            this.classList.add('bg-purple-50', 'text-purple-700');
            // Eğer birimse, ana kategoriyi de vurgula
            if (this.parentElement.classList.contains('unit-list')) {
                this.parentElement.previousElementSibling.classList.add('bg-purple-50', 'text-purple-700');
            }
        });
    });

    // --- MODAL KAPATMA BUTONU KODU ---
    const closeModalBtn = document.getElementById('closeModalBtn');
    const createStoryModal = document.getElementById('createStoryModal'); // Modal elementini de alalım

    if(closeModalBtn && createStoryModal) { // Buton ve modal bulunduysa
         closeModalBtn.addEventListener('click', () => {
            createStoryModal.classList.add('modal-closed'); // Veya 'hidden' gibi Tailwind sınıfı
         });
    } else {
         console.error("Modal kapatma butonu veya modal elementi bulunamadı!");
    }


    // --- MODAL AÇMA BUTONU KODU (Eğer demo butonu hala varsa) ---
    // const showModalBtn = document.getElementById('showModalTriggerButton'); // Gerçek butonunuzun ID'si
    // if (showModalBtn && createStoryModal) {
    //     showModalBtn.addEventListener('click', () => {
    //         createStoryModal.classList.remove('modal-closed');
    //     });
    // }

    // --- Buraya diğer tüm JavaScript kodlarınız gelebilir ---

}); // DOMContentLoaded sonu