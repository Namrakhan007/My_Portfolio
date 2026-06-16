import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, badge }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {badge && <span className="proj-badge">{badge}</span>}
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%', height: '100%' }}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
