import { prisma } from "@/app/lib/prisma";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";

const getTripById = async (tripId: string) => {
  return await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripById(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation trip={trip} />
      <TripDescription description={trip.description} />
    </div>
  );
};

export default TripDetails;
