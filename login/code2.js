const hour = new Date().getHours();
document.body.style.backgroundColor = hour < 6 || hour > 18 ? '#333' : '#f0f0f0';
document.body.style.color = hour < 6 || hour > 18 ? '#fff' : '#000';