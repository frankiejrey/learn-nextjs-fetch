

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    paths: data.map(event => ({
      params: { id: event.id.toString() }
    })),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data = await response.json();

  return {
    props: { data }
  }
};
  
export default function Details({ data }) {
  
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
    </div>
  )
};