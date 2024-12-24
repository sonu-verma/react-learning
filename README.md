# Basic React Learning
/*
Header
    - Logo 
    - Navbar
Body
    - Search
    - Resto Container
        - Resto Card
            - Img, Name of Resto, Rating, Cuisine, delivery Time
Footer
    - Copyright
    - Links
*/


# Parcel
    - Dev Build 
    - Local Server
    - HMR - Hot Module Replacement
    - File Watching algorithm
    - uses Caching to build faster
    - Image Optimization
    - Minification
    - Bundling
    - Compressing
    - Consistent Hashing
    - Code Spliting
    - Differential Bundling - Support Older Bwowsers
    - Diagonistic
    - Error Handling
    - Https
    - Tree Shaking - Removed unused files


# Package.json
    - browserslist: can handle last browser list to support project 

# React Hooks
(Normal Js Utility function)
- don't use outside components
- don't use inside condition

- useState - superpowerfull State variable in react

- useEffect(callback, dependent array) 
    - If no dependency array => useEffect is called every render
    - if dependency array is empty = [] => useEffect is called on initial render(Just Once)
    - if dependency array is given with perticular state then it will run on everytime when state will change
        useEffect(callback, [stateName])

# Fake ui
Shimmer ui 

# cors resolve
https://cors.sh/