import Link from "next/link";

function BookYourStayCard() {
  return (
    <div
      className={`flex flex-col gap-4 px-3 py-6 custom_border shadow-md hover:shadow-xl rounded-md `}
    >
      <p className="font-poppins text-grey font-ExtraBold text-center lg:text-right">
        from <span className="text-3xl text-yellow">375 €</span> per night
      </p>
      <hr />
      <Link href="/contact" className="btn justify-center">
        Book Your Stay
      </Link>
    </div>
  );
}

export default BookYourStayCard;
