// Vertex Shader (vsSource)
attribute vec4 aVertexPosition;
void main(void) {
    gl_Position = aVertexPosition;
}

// Fragment Shader (fsSource)
precision mediump float;
void main(void) {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Red color
}