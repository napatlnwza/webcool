const passwordForm = document.getElementById("password-form");

passwordForm.addEventListener("submit", async function(e) {
    e.preventDefault(); // ป้องกันหน้าเว็บรีโหลด
    
    const textElement = document.getElementById("text-password");
    const passwordValue = textElement.value.trim(); // ดึงค่าข้อความออกมา
    
    if (passwordValue === "") return;

    // 1. แสดง Loading Popup
    Swal.fire({
        title: "กำลังตรวจสอบ",
        text: "กรุณารอสักครู่...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    // 2. หน่วงเวลาจำลองการโหลด (เช่น 1.5 วินาที)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 3. ปิด Loading และแสดงผลลัพธ์
    if (passwordValue === "lateral root") {
        Swal.fire({
            icon: "success",
            title: "✅ ถูกต้อง!",
            html: `
                <div style="text-align:center;">
                    <p>1</p>
                    <h2 style="color:#28a745; margin: 10px 0;">p</h2>
                    <p style="font-size: 0.9em; color: #666;">zuzu</p>
                </div>
            `,
            confirmButtonText: "รับทราบ",
            confirmButtonColor: "#667eea"
        });
    } 
    else if (passwordValue === "tongue anv saliva") {
        Swal.fire({
            icon: "success",
            title: "✅ ถูกต้อง!",
            html: `
                <div style="text-align:center;">
                    <p>2</p>
                    <h2 style="color:#28a745; margin: 10px 0;">a</h2>
                    <p style="font-size: 0.9em; color: #666;">zuzu</p>
                </div>
            `,
            confirmButtonText: "รับทราบ",
            confirmButtonColor: "#667eea"
        });
    }
    else if (passwordValue === "frontal lobe") {
        Swal.fire({
            icon: "success",
            title: "✅ ถูกต้อง!",
            html: `
                <div style="text-align:center;">
                    <p>3</p>
                    <h2 style="color:#28a745; margin: 10px 0;">p</h2>
                    <p style="font-size: 0.9em; color: #666;">zuzu</p>
                </div>
            `,
            confirmButtonText: "รับทราบ",
            confirmButtonColor: "#667eea"
        });
    }
    else if (passwordValue === "met leu ile ile asp  gly") {
        Swal.fire({
            icon: "success",
            title: "✅ ถูกต้อง!",
            html: `
                <div style="text-align:center;">
                    <p>4</p>
                    <h2 style="color:#28a745; margin: 10px 0;">a</h2>
                    <p style="font-size: 0.9em; color: #666;">zuzu</p>
                </div>
            `,
            confirmButtonText: "รับทราบ",
            confirmButtonColor: "#667eea"
        });
    } 
    else if (passwordValue === "custard apple") {
        Swal.fire({
            icon: "success",
            title: "✅ ถูกต้อง!",
            html: `
                <div style="text-align:center;">
                    <p>5</p>
                    <h2 style="color:#28a745; margin: 10px 0;">i</h2>
                    <p style="font-size: 0.9em; color: #666;">zuzu</p>
                </div>
            `,
            confirmButtonText: "รับทราบ",
            confirmButtonColor: "#667eea"
        });
    } 
    else {
        Swal.fire({
            icon: "error",
            title: "❌ รหัสไม่ถูกต้อง",
            html: `
                <div style="text-align:center;">
                    <p><b style="color:#dc3545;">${passwordValue}</b></p>
                    <p>ยังไม่ถูกน้าาาา</p>
                </div>
            `,
            confirmButtonText: "ลองใหม่",
            confirmButtonColor: "#667eea"
        });
    }

    // ล้างค่าในช่องรหัสผ่านหลังตรวจสอบเสร็จ (ถ้าต้องการ)
    // textElement.value = "";
});