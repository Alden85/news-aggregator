import { UnifiedArticle } from "../../interfaces/news/unified-article";
import { v4 as uuidv4 } from "uuid";

interface Props {
  response: UnifiedArticle;
}

const Article = ({ response }: Props) => {
  // Convert string date to Date object
  const publicationDate = new Date(response.date);

  // Format the date and time
  const formattedDate = publicationDate
    .toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toLowerCase();

  const formattedTime = publicationDate
    .toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .toLowerCase();

  const key = uuidv4();

  return (
    <table className="table table-hover">
      <tbody>
        <tr key={key}>
          <td className="p-1">
            <div>
              <a
                href={response.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <p className="fs-5">{response.title}</p>
              </a>
            </div>
            <div>
              <small className="fs-6">{response.source}</small>
            </div>
            <div>
              <p className="text-body-secondary fs-6">
                {formattedDate} {formattedTime}
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Article;
