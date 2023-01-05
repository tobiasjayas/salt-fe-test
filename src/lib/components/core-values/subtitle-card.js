const SubtitleCard = (props) => {
  return (
    <div className="flex gap-4">
      <div className="h-0.5 w-6 bg-grey-p mt-5" />
      <div>
        <h3>{props.title}</h3>
        <p className="text-grey-p">
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default SubtitleCard
