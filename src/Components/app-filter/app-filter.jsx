const AppFilter = ({ updatFilterHendler, filter}) => {
  return (
    <div className="btn-group">
      {btnsArr.map(btn =>(
      <button key={btn.name} className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => updatFilterHendler(btn.name)} type="button">
        {btn.label}
      </button>
      ))}
    </div>
  );
};

const btnsArr =[
  {name: 'all', label: ' Barcha kinolar'},
  {name: 'popular', label: 'Mashhhur kinolar'},
  {name: 'mostViewers' , label: ' Eng kop korilgan kinolar'},
]
export default AppFilter;
