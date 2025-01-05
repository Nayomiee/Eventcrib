function goToSection(sectionId){
    document.querySelectorAll('.section').forEach(function (section){
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}