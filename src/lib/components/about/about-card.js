const AboutCard = (props) => {
  return (
    <div className="flex flex-col gap-y-3 h-80">
      <h1 className="text-blue-title">{props.title}</h1>
      <div className="">
        <h4>{props.subtitle}</h4>
        <p className="text-sm text-grey-p leading-6">{props.content}</p>
      </div>
    </div>
  )
}

export default AboutCard
