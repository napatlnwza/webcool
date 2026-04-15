const passwordForm = document.getElementById("password-form");
passwordForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const textElement = document.getElementById("text-password");
    const passwordValue = textElement.value.trim();

    if (passwordValue === "") return;

    // Loading popup
    Swal.fire({
        title: "กำลังตรวจสอบ",
        text: "กรุณารอสักครู่...",
        allowOutsideClick: false,
        customClass: { popup: 'swal-custom' },
        didOpen: () => { Swal.showLoading(); }
    });

    await new Promise(resolve => setTimeout(resolve, 1500));

    const CONFIRM_BTN_COLOR = "#c0392b";

    const results = {
        "lateral root": { num: 1, letter: "p" },
        "tongue and saliva": { num: 2, letter: "a" },
        "frontal lobe": { num: 3, letter: "p" },
        "met leu thr asn asp gly": { num: 4, letter: "a" },
        "custard apple": { num: 5, letter: "i" },
    };

    if (results[passwordValue]) {
        const { num, letter } = results[passwordValue];
        Swal.fire({
            icon: "success",
            title: "✅ ถูกต้อง!",
            html: `
                        <div style="text-align:center;font-family:'Sarabun',sans-serif;">
                            <p style="color:#888;font-size:14px;">ข้อที่</p>
                            <p style="font-size:22px;font-weight:700;color:#333;">${num}</p>
                            <h2 style="color:#2e7d32;font-size:48px;margin:10px 0;letter-spacing:4px;">${letter}</h2>
                            <p style="font-size:13px;color:#aaa;letter-spacing:2px;">zuzu</p>
                        </div>
                    `,
            confirmButtonText: "รับทราบ",
            confirmButtonColor: CONFIRM_BTN_COLOR,
            customClass: { popup: 'swal-custom' }
        });
    } else {
        textElement.classList.add('shake');
        setTimeout(() => textElement.classList.remove('shake'), 600);

        Swal.fire({
            icon: "error",
            title: "❌ รหัสไม่ถูกต้อง",
            html: `
                        <div style="text-align:center;font-family:'Sarabun',sans-serif;">
                            <p><b style="color:#c0392b;">${passwordValue}</b></p>
                            <p style="color:#666;margin-top:6px;">ยังไม่ถูกน้าาาา</p>
                        </div>
                    `,
            confirmButtonText: "ลองใหม่",
            confirmButtonColor: CONFIRM_BTN_COLOR,
            customClass: { popup: 'swal-custom' }
        });
    }
});