
export default function Form() {
  return <form id="form">
    <div className="form-group">
      <label htmlFor="initial">Initial Investment</label>
      <input type="number" name="initial" id="initial" />
    </div>
    <div className="form-group">
      <label htmlFor="annual">Annual Investment</label>
      <input type="number" name="annual" id="annual" />
    </div>
    <div className="form-group">
      <label htmlFor="expected">Expected Return</label>
      <input type="number" name="expected" id="expected" />
    </div>
    <div className="form-group">
      <label htmlFor="duration">Duration</label>
      <input type="number" name="duration" id="duration" />
    </div>
  </form>
}