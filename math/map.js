export default function(val, oldMin, oldMax, newMin, newMax) {
    return newMin + (val - oldMin) * (newMax - newMin) / (oldMax - oldMin);
}
