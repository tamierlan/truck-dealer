import React from 'react';
import TruckFilter from './TruckFilter';
import TruckList from './TruckList';
import { withTruckConsumer } from '../context';
import Loading from './Loading';

function TruckContainer({ context }) {
  const { loading, sortedTrucks, trucks } = context;
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <TruckFilter trucks={trucks} />
      <TruckList trucks={sortedTrucks} />
    </>
  );
}

export default withTruckConsumer(TruckContainer);




// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';
//
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const {loading, sortedRooms, rooms} = value;
//         if (loading) {
//           return <Loading />
//         }
//
//         return (
//           <div>
//             hello from room container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
