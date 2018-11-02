function toggle() {
    let cube1 = document.getElementById("cube")
    
    if (cube1.classList.contains("cubeTransform")) {
        cube1.classList.remove("cubeTransform");
        return;
    }
    
    else if (!cube1.classList.contains("cubeTransform")) {
        cube1.classList.add("cubeTransform");
    }
}