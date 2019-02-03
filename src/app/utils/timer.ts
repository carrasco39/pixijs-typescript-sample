export async function delay(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000 * time);
    });
}