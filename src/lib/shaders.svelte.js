// TODO: Add a "matrix" shader with falling 1s and 0s
export let wave_shader = $state({
    vert:
   `#version 300 es
    in vec2 aPosition;
    
    void main(void) {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
    `,
    frag:
   `#version 300 es
    precision highp float;

    uniform float uTime;
    uniform vec2 uResolution;

    out vec4 fragColor;

    #define S smoothstep

    vec4 Line(vec2 uv, float speed, float height, vec3 col) {
        uv.y += S(1.0, 0.0, abs(uv.x * 0.8)) * sin(uTime * speed - uv.x * height) * 0.3 - 0.15;
        return vec4(S(0.005 * S(0.1, 1.0, abs(uv.x)), 0.0, abs(uv.y) - 0.005) * col, 0.0);
    }

    void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

        vec4 linestore = vec4(0.0);
        for (float i = 0.0; i <= 5.0; i += 1.0) {
            float t = i / 20.0;
            vec4 line = Line(uv, 1.0 + t, 8.0, vec3(0.03 + t * 0.5, 0.11 + t * 0.5, 0.03 + t * 0.5));
            linestore += line;
        }

        fragColor = vec4(linestore.rgb, linestore.g);
    }
    `
});