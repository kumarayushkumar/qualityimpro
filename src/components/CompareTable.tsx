import { Icon } from './ui/Icon'

const TableRow: React.FC<{
  present: boolean
  featureDescription: string
  point: string
}> = ({ point, present, featureDescription }) => {
  return (
    <>
      <tr className="table__row">
        <th className="table__heading-feature">{point}</th>
        {present ? (
          <th>
            <div className="present">
              <Icon type={true} />
            </div>
          </th>
        ) : (
          <th>
            <div className="not-present">
              <Icon type={false} />
            </div>
          </th>
        )}
      </tr>
      <tr>
        <td className="feature__description">{featureDescription}</td>
        <td></td>
      </tr>
    </>
  )
}

const CompareTable: React.FC<{ title: string; subTitle: string }> = ({
  title,
  subTitle
}) => {
  return (
    <section className="">
      <div className="container section__heading">
        <h2 className="home__heading">{title}</h2>
        <p>{subTitle}</p>
      </div>
      <div className="compare__table">
        <table>
          <thead className="table__heading">
            <th></th>
            <th>Without Q&I</th>
            <th>With Q&I</th>
          </thead>
          <tbody>
            <TableRow
              point="Hygiene and Quality Audit with Solutions"
              present={false}
              featureDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, nisl quis consectetur aliquam, nunc nisl faucibus nisl, vitae."
            />
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default CompareTable
