"use client";

import { useSearchParams } from "next/navigation";

export default async function Page({ params }) {
    const slug = (await params).slug
    return <div>My Post: {slug}</div>
  }
// const GymPage = () => {
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id');

//     return (
//         <div>
//             <h1>Gym ID: {id}</h1>
//         </div>
//     );
// };

// export default GymPage;
