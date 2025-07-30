const loadDatastoreScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Remove any previous script with the same ID
    const oldScript = document.getElementById("datastore-script");
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement("script");
    script.src = src;
    script.id = "datastore-script";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Erro ao carregar ${src}`));
    document.body.appendChild(script);
  });
};

export default loadDatastoreScript;
