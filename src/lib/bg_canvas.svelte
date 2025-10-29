<script lang="ts">
    import { main_shader } from "./store";

    const prefersDarkScheme = $state(window.matchMedia("(prefers-color-scheme: dark)").matches);
    const vsSource = main_shader.vert;
    const fsSource = main_shader.frag;
    let canvas: HTMLCanvasElement;
    let gl: WebGL2RenderingContext | null;
    let uTimeLoc: WebGLUniformLocation | null;
    let uResolutionLoc: WebGLUniformLocation | null;
    let uBgColorLoc: WebGLUniformLocation | null;

    $effect(() => {
        gl = canvas.getContext("webgl2");
        if (!gl) {
            alert(
                "Unable to initialize WebGL. Your browser may not support it.",
            );
            return;
        }

        const program = createProgram(gl, vsSource, fsSource);
        const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
        const vao = gl.createVertexArray();
        gl.bindVertexArray(vao);

        const vbo = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const loc = gl.getAttribLocation(program, "aPosition");
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
        uTimeLoc = gl.getUniformLocation(program, "uTime");
        uResolutionLoc = gl.getUniformLocation(program, "uResolution");
        uBgColorLoc = gl.getUniformLocation(program, "uBgColor");

        function render(time: GLfloat) {
            time *= 0.001; // convert to seconds

            resizeCanvasToDisplaySize(gl.canvas);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.clearColor(0.96, 1.0, 0.98, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.useProgram(program);
            gl.bindVertexArray(vao);

            // Pass uniforms
            gl.uniform1f(uTimeLoc, time);
            gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
            gl.uniform3f(uBgColorLoc, 0.13, 0.13, 0.13);
            if (prefersDarkScheme) {
                gl.uniform3f(uBgColorLoc, 0.13, 0.13, 0.13);
            } else {
                gl.uniform3f(uBgColorLoc, 0.96, 1.0, 0.98);
            }
            

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            requestAnimationFrame(render);
        }
        render(1);
    });

    function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
        // Lookup the size the browser is displaying the canvas in CSS pixels.
        const dpr = window.devicePixelRatio;
        const { width, height } = canvas.getBoundingClientRect();
        const displayWidth = Math.round(width * dpr);
        const displayHeight = Math.round(height * dpr);

        // Check if the canvas is not the same size.
        const needResize =
            canvas.width !== displayWidth || canvas.height !== displayHeight;

        if (needResize) {
            // Make the canvas the same size
            canvas.width = displayWidth;
            canvas.height = displayHeight;
        }

        return needResize;
    }

    function compileShader(
        gl: WebGL2RenderingContext,
        type: GLenum,
        source: string,
    ) {
        const shader = gl.createShader(type);
        if (!shader) {
            alert("Unable to create shader of type: " + type + ".");
            return;
        }
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(
                "An error occurred compiling the shaders: " +
                    gl.getShaderInfoLog(shader),
            );
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    function createProgram(
        gl: WebGL2RenderingContext,
        vsSource: string,
        fsSource: string,
    ) {
        const vs = compileShader(gl, gl.VERTEX_SHADER, vsSource);
        const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);
        if (!vs || !fs) {
            alert("Unable to compile shaders: vert = " + vs + "frag = " + fs);
            return;
        }
        const program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }
        console.log("Shader program success.");
        return program;
    }
</script>

<canvas bind:this={canvas}></canvas>

<style>
    canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--color_bg);
        z-index: -1;
    }
</style>
