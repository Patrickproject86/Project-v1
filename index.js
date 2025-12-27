// 修复按钮点击事件
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const targetHref = this.getAttribute('href');
        const targetPage = targetHref.split('#')[0];
        const targetAnchor = targetHref.split('#')[1];

        if (targetPage !== window.location.pathname) {
            window.location.href = targetHref;
        } else {
            const targetSection = document.querySelector(`#${targetAnchor}`);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// 移除可能阻止滚动行为的代码
// document.addEventListener('wheel', function(event) {
//     event.preventDefault(); // 移除该代码
// });

// 疾病模式数据
const diseasePatterns = [
    { disease: "甲型流感", symptoms: ["fever", "cough", "sore-throat", "muscle-pain"] },
    { disease: "乙型流感", symptoms: ["fever", "cough", "muscle-pain"] },
    { disease: "普通感冒", symptoms: ["fever", "cough", "runny-nose", "fatigue"] },
    { disease: "诺如病毒感染", symptoms: ["fever", "diarrhea", "vomiting"] },
    { disease: "呼吸道合胞病毒", symptoms: ["fever", "cough", "runny-nose"] },
    { disease: "登革热", symptoms: ["fever", "headache", "joint-pain", "rash"] },
    { disease: "疟疾", symptoms: ["fever", "headache", "muscle-pain"] },
    { disease: "新冠感染", symptoms: ["fever", "cough", "fatigue", "headache"] }
];

// 诊断函数
function diagnose(symptoms) {
    for (const pattern of diseasePatterns) {
        if (pattern.symptoms.every(symptom => symptoms[symptom] === "yes")) {
            return `根据您的症状，可能是${pattern.disease}。建议尽快就医。`;
        }
    }
    return "您的症状不典型，可能是普通感冒或其他疾病。建议咨询医生。";
}

// 诊断表单提交事件
document.getElementById('diagnosis-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取用户输入的症状
    const symptoms = {
        fever: document.getElementById('fever').value,
        cough: document.getElementById('cough').value,
        'sore-throat': document.getElementById('sore-throat').value,
        'muscle-pain': document.getElementById('muscle-pain').value,
        fatigue: document.getElementById('fatigue').value,
        'runny-nose': document.getElementById('runny-nose').value,
        diarrhea: document.getElementById('diarrhea').value,
        vomiting: document.getElementById('vomiting').value,
        headache: document.getElementById('headache').value,
        'joint-pain': document.getElementById('joint-pain').value,
        rash: document.getElementById('rash').value
    };

    // 调用诊断函数并显示结果
    const result = diagnose(symptoms);
    document.getElementById('result').innerText = result;
});
