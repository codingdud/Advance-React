const searchItems: string[] = [
    "React Hooks",
    "TypeScript Generics",
    "JavaScript Promises",
    "CSS Flexbox",
    "Node.js Express",
    "MongoDB Atlas",
    "GraphQL API",
    "REST API",
    "Docker Container",
    "AWS Lambda"
];
export default function List({query}:{query:string}) {
    console.log(searchItems.filter(item=>item.toLowerCase().includes(query.toLowerCase())))
  return (
    <div>
        {!query&&<p>loading....</p>}
        <ul>
            {query&&searchItems.filter(item=>item.toLowerCase().includes(query.toLowerCase())).map(item=>(<li key={item}>{item}</li>))}
        </ul>
    </div>
  )
}
