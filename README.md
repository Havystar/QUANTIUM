# Quantum Vortex Art

Project description
Lepiej odpalić prezentację w canvie niż PDF jeśli macie taką możliwość. (jest podpięta jako klikalny link w zakładce URL/demo)



Our primary goal is to leverage quantum technology to generate intricate fractal images and then utilize stable diffusion to enhance and transform these fractals into mesmerizing art pieces. This fusion of quantum computing and advanced image processing techniques promises to unlock new dimensions of creativity in digital art.



The art we generated was using a real quantum computer. You can also see code and use a notebook to generate fractals at https://lab.quantum-computing.ibm.com/. Unfortunately loading all stable diffusion models in the IBM site is nearly impossible in the free plan so we are hosting it on our own server (We don't use AWS or any other cloud provider, but thanks to docker it takes just a moment to deploy! (if we have the money ;P))



Importance of Starting with a Fractal:

Starting with a fractal as the initial image is crucial Starting from fractals is superior to random noises, as it provides structured complexity, inherent aesthetic appeal, and a solid foundation for artistic exploration, fostering creativity and visual harmony.



User Interaction:

User can generate art by giving prompts to the diffusion algorithm. This enables them to shape the final artwork, adding a personal touch and blending quantum technology with human creativity.





In summary, this project represents an exciting convergence of quantum technology and generative art, using fractals as the foundation for artistic exploration and inviting user input to shape the final artwork through stable diffusion. It showcases the potential of quantum computing as a creative tool and opens up new avenues for digital art creation.





Code Overview:

The project begins by utilizing the Qiskit framework to harness the power of quantum computers. Here's an overview of the key components in the provided code:

Quantum Circuit Creation:
The code initializes a quantum circuit with 2 qubits and 2 classical bits.
Quantum gates are applied to create a superposition and manipulate the quantum state.
Quantum Execution on Real Hardware:
The program connects to an IBM Quantum computer backend with at least 2 qubits.
The quantum circuit is executed on the real quantum computer, and measurement results are obtained.
Processing Quantum Results:
The code calculates probabilities and maps them to real and imaginary parts of a complex number.
These complex numbers are used to define the parameters for generating a Julia set fractal.
Julia Set Fractal Generation:
The result is an array representing the number of iterations it takes for each point to diverge.
Stable diffusion:
We use the following stable deffusion frontend AUTOMATIC1111/stable-diffusion-webui: Stable Diffusion web UI (github.com)
It is set up on docker and we have 2 microservices written in Python using FastApi
These two microservices allow the user to send the image to stable diffusion API with their own prompt.
Frontend:
We created a simple website for you to use as a preview of simulated quantum computing and to allow the user to generate beautiful art.
