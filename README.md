# Solti [WIP]

Solit is an cli tool to generate React Component decorated with patterns that are widely used and mostly taken from site [React Patterns](https://reactpatterns.com/).
##### Some of the patterns used in React (Checked are available):    
 - [X] [Higher-order component](https://reactpatterns.com/#higher-order-component)
 - [ ] [Stateless function](https://reactpatterns.com/#stateless-function)
 - [ ] [JSX spread attributes](https://reactpatterns.com/#jsx-spread-attributes)
 - [ ] [Destructuring arguments](https://reactpatterns.com/#destructuring-arguments)
 - [ ] [Conditional rendering](https://reactpatterns.com/#conditional-rendering)
 - [ ] [Children types](https://reactpatterns.com/#children-types)
 - [ ] [Array as children](https://reactpatterns.com/#array-as-children)
 - [ ] [Function as children](https://reactpatterns.com/#function-as-children)
 - [ ] [Render callback](https://reactpatterns.com/#render-callback)
 - [ ] [Children pass-through](https://reactpatterns.com/#children-pass-through)
 - [ ] [Proxy component](https://reactpatterns.com/#proxy-component)
 - [ ] [Style component](https://reactpatterns.com/#style-component)
 - [ ] [Event switch](https://reactpatterns.com/#event-switch)
 - [ ] [Layout component](https://reactpatterns.com/#layout-component)
 - [ ] [Container component](https://reactpatterns.com/#container-component)
 - [ ] [State hoisting](https://reactpatterns.com/#state-hoisting)
 - [ ] [Controlled input](https://reactpatterns.com/#controlled-input)

## Install
  ##### NPM
   `npm i -g solti`
  #### Yarn
  `yarn global add solti`

## Usage
From your project on any location you can run `solti` on your terminal
which will ask some simple questions:

`Q1: Please select available react component patterns` This will be the pattern you want to use. [Default: Higher order]

`Q2: Enter component name` Name of your component [Default: Random name]

`Q3: Add Prop Types` Should `solti` add prop types validation also. [Default: Yes]

`Q4: Enter destination for component relative from current location` This will be location where component will be place and should be default from where `solti` is running. [Default: Current Location]
