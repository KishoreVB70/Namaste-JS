### Js Engine
- **JavaScript RunTime Environment**
    - A Big container that contains everything that is needed to run Js Code
    - JRE contains the
        - Js Engine
        - Set of API’s to talk to the outer environment ->  such as console, DOM, fetch
        - The Event Loop and the Queues
        - Js Engine is the heart of the Run Time Environment
The Engine itself
- Different browsers and environments have a different kind of JS engine
- Various Engines
	- Node Js and Google Chrome share the same `v8` Engine
	- The original Engine Developed by the founder of js is now evolved to be the `SpiderMonkey`
	- V8 in Chrome is actually Written in C++
- Architecture
	- Takes in the Js code as the input
	- And go Through 3 Important Steps
	1. Parsing
	2. Compilation
	3. Execution
- V9 Engine architecture image
	- ![[Pasted image 20240608072311.png]]
- Components of the engine
	1. Parser
	2. Interpreter
	3. Compiler
	4. Memory heap
	5. Call stack
	6. Garbage collector
- Parsing
	- The code is broken down into tokens
	- It forms a tree like structure for each components such as variable declaration
		- It is kinda in Json format
		- It separates the variable type, variable name, the variable content into separate stuffs
	- The **syntax parser**, takes in the code and converts it into **Abstract Syntax Tree**
	- Then the AST is Passed to the compilation phase
	- Image of AST
		- ![[Pasted image 20240608070532.png]]
- Compilation
	- Compilation and execution goes hand in hand
	- JS can be both interpreted and compiled based on the engine
		- Interpreter - Takes in the code and executes line by line - Speed
		- Compiler - Whole program is compiled and then executed - Efficiency
	- JS was originally intended to be interpreted as browsers cannot wait for the code to be compiled first and then rendered, it needed to be rendered in real time
	- Just in time Compilation -> Uses both interpreter and compiler 
		- JIT - Best of Both Worlds
	- First the AST goes inside the interpreter
	- The high Level Code is converted into byte code by the interpreter and pushed to the execution
	- While the code is being interpreted, compiler **optimizes the code as much as possible** to make the process more efficient
	- JS engines have their own algorithm to work between interpreter and compiler
	- The compiler does stuff for optimization such as
		1. In lining
		2. Copy Elision
		3. Inline caching
	- AOT - Ahead of time compilation ->  Compiler takes a code and optimizes it before running -> converts it into byte code pushes it into the execution
	- All this is possible due to the **communication** between the interpreter and the compiler
- Execution
	- Execution of Js code is not possible without memory heap and Call Stack
	- Memory Heap - Place where **all memory is stored**, constantly in Sync with Call Stack and Garbage Collector - All Variables and Function
- Garbage Collector
	- Collects all the unused memory and sweeps it
	- Uses the Mark & Sweep Algorithm