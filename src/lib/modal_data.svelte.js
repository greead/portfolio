export const modal_data = $state({
    img: "/whispers.png",
    text: "Whispers",
    active: false
});

// @ts-ignore
// TODO: Switch to an attachment instead of an action
export function clickOutside(node) {
    // @ts-ignore
    const handleClick = event => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(
                new CustomEvent('click_outside', node)
            )
        }
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}