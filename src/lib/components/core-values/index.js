import SubtitleCard from './subtitle-card'

const CoreValue = () => {
  return (
    <div className="bg-broken-white pt-14">
      <div className="px-6">
        <h1 className="text-blue-title text-center">Our Core Values</h1>
        <p className="mt-6 leading-6 font-normal text-grey-p">
          Ridiculus laoreet libero pretium et, sit vel elementum convallis
          fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
          etiam sit.
          <br />
          <br />
          In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
          amet enim.
        </p>
      </div>
      <div className="mt-8 px-4 flex flex-col gap-y-6">
        <SubtitleCard
          title="Dedication"
          text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
        />
        <SubtitleCard
          title="Intellectual Honesty"
          text="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse."
        />
        <SubtitleCard
          title="Curiosity"
          text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
        />
      </div>
      <div className="flex justify-end">
        <img
          src="assets/core-value-mobile.png"
          alt="core-value"
          className="mt-7 block lg:hidden"
        />
      </div>
    </div>
  )
}

export default CoreValue
