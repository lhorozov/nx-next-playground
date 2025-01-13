const SlowRenderComponent = () => {
  const simulateDelay = (ms: number) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
      // Intentional empty loop to simulate delay
    }
  };

  simulateDelay(1000); // Simulate 1s delay

  return <div>Slow render due to delay.</div>;
};

export default SlowRenderComponent;
