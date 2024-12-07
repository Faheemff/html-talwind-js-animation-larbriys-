const lenis = new Lenis({
    autoRaf: true, // Increase wheel sensitivity
});

lenis.on('scroll', (e) => {
    console.log(e);
});

