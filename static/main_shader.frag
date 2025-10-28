#version 300 es
precision highp float;

uniform float uTime;
uniform vec2 uResolution;

out vec4 fragColor;

#define S smoothstep

vec4 Line(vec2 uv, float speed, float height, vec3 col) {
    uv.y += S(1.0, 0.0, abs(uv.x)) * sin(uTime * speed + uv.x * height) * 0.2;
    return vec4(
        S(0.06 * S(0.2, 0.9, abs(uv.x)), 0.0, abs(uv.y) - 0.004) * col,
        1.0
    ) * S(1.0, 0.3, abs(uv.x));
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
    vec4 O = vec4(0.0);

    for (float i = 0.0; i <= 2.0; i += 1.0) {
        float t = i / 10.0;
        O += Line(uv, 1.0 + t, 8.0 + t, vec3(0.55 + t * 0.7, 0.95 + t * 0.4, 0.55));
    }

    fragColor = O;
}