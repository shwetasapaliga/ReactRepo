

const heading = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: 'child' },
    [React.createElement('h1', {}, "hi from H1"), React.createElement('h2', {}, "hi from h2")]),
    React.createElement('div', { id: 'child2' },
    [React.createElement('h1', {}, "hi from H1 c"), React.createElement('h2', {}, "hi from h2")])
])
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log("headin: ", heading)
root.render(heading)