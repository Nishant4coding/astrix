export default function Subscribe() {
  return (
    <div className="w-full mt-10 text-center">
      <h3 className="mb-4 text-lg font-bold text-pe">Subscribe</h3>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLScYjyjX06GXezWj2GZTf1U-4UCRWUEYLj_xaX4rHcPrmp-urA/formResponse"
        method="post"
        role="form"
        className="mt-5 bg-white fss rounded-xl"
      >
        <input
          className="flex w-48 h-10 bg-white border-white rounded-tl-[14px] rounded-bl-[14px] p-2 justify-center text-sm focus:outline-none flex-1"
          type="email"
          name="entry.64697331"
          placeholder="Type email..."
          required
        />
        <input
          type="submit"
          value=""
          className="min-w-[20%] h-10 bg-pk bg-contain bg-no-repeat bg-center bg-[url('/svgs/send.svg')] rounded-r-xl"
        />
      </form>
    </div>
  );
}
