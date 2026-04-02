const RoleSwitcher = ({ role, setRole }) => {
  return (
    <div className="mb-4 flex justify-end">
      <select
        className="border p-2 rounded"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;