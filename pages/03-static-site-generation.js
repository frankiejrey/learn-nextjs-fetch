import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { data },
    revalidate: 30
  }
};

export default function StaticSiteGeneration({ data }) {

  return (
    <div>
      <h1>Next JS Fetch and Display data from and API</h1>

      {data.map(event => (
        <div key={event.id}>
          <p>Name: {event.name}</p>
          <Link href={`/users-ssg/${event.id}`}>View more</Link>
          <hr></hr>
        </div>
      ))}
    </div>
  )
};