export default function Loader({ show }) {
  return show ? <div data-cy="loader" className="loader"></div> : null;
}
