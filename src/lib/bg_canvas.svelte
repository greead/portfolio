<script>
    // const canvas = document.getElementById("myCanvas");
    // const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");

    // if (!gl) {
    //     alert("Unable to initialize WebGL. Your browser may not support it.");
    // }

    // function compileShader(gl, type, source) {
    //     const shader = gl.createShader(type);
    //     gl.shaderSource(shader, source);
    //     gl.compileShader(shader);

    //     if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    //         console.error(
    //             "An error occurred compiling the shaders: " +
    //                 gl.getShaderInfoLog(shader),
    //         );
    //         gl.deleteShader(shader);
    //         return null;
    //     }
    //     return shader;
    // }

    // const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vsSource);
    // const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);
</script>

<canvas id="myCanvas"></canvas>  

<style>
    canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: aqua; */
        z-index: -1;
    }
</style>
