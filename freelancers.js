// Modal-г нээх функц
function openCV(name) {
    const modal = document.getElementById("cvModal");
    const modalName = document.getElementById("modalName");
    const modalDetails = document.getElementById("modalDetails");

    modalName.textContent = name;

    // Жишээ мэдээлэл (нэрээр нь өөрчилж болно)
    const cvData = {
        "Бат": "Мэргэжил: Frontend Developer\nТуршлага: 3 жил\nУтас: 99110001\nТайлбар: Бат нь React, Vue-д сайн.",
        "Сараа": "Мэргэжил: UI/UX Designer\nТуршлага: 2 жил\nУтас: 99110002\nТайлбар: Сараа Figma, Adobe XD-д туршлагатай.",
        "Тэмүүжин": "Мэргэжил: Backend Developer\nТуршлага: 4 жил\nУтас: 99110003\nТайлбар: Node.js, Python-д туршлагатай.",
        "Наран": "Мэргэжил: Graphic Designer\nТуршлага: 5 жил\nУтас: 99110004\nТайлбар: Photoshop, Illustrator-д сайн.",
        "Бат-Эрдэнэ": "Мэргэжил: Mobile Developer\nТуршлага: 3 жил\nУтас: 99110005\nТайлбар: Android, Flutter-д туршлагатай.",
        "Мөнхцэцэг": "Мэргэжил: QA Engineer\nТуршлага: 2 жил\nУтас: 99110006\nТайлбар: Manual, Automation тестэнд туршлагатай.",
        "Чулуунбат": "Мэргэжил: DevOps Engineer\nТуршлага: 4 жил\nУтас: 99110007\nТайлбар: AWS, Docker, CI/CD-д туршлагатай.",
        "Баярмаа": "Мэргэжил: Content Writer\nТуршлага: 3 жил\nУтас: 99110008\nТайлбар: Блог, SEO контент бичдэг.",
        "Ганбат": "Мэргэжил: Data Analyst\nТуршлага: 2 жил\nУтас: 99110009\nТайлбар: Excel, SQL, Power BI-д туршлагатай.",
        "Сувд": "Мэргэжил: Marketing Specialist\nТуршлага: 3 жил\nУтас: 99110010\nТайлбар: Digital marketing, Social Media-д сайн."
    };

    modalDetails.textContent = cvData[name] || "Энд CV-ийн дэлгэрэнгүй мэдээлэл харагдана.";

    modal.style.display = "block";
}

// Modal-г хаах функц
function closeCV() {
    const modal = document.getElementById("cvModal");
    modal.style.display = "none";
}

// Modal гаднах тал дээр дарахад хаагдах
window.onclick = function(event) {
    const modal = document.getElementById("cvModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
