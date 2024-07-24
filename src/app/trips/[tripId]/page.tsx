import { prisma } from "@/app/lib/prisma";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import TripHeader from "./components/TripHeader";

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

      {/* RESERVA */}
    </div>
  );
};

export default TripDetails;
