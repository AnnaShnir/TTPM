$database = db.get(SELECT p_name, m_name FROM TableP, TableM WHERE TableP.pid=TableM.pid, ORDER BY p_date DESC;)

-- PHP query:

<?php 

$database = $mysqli->query("SELECT p_name, m_name FROM TableP, TableM WHERE TableP.pid=TableM.pid, ORDER BY p_date DESC");
?>

-- Laravel offers another style of query (
-- php interfaces are a bit older than mapping frameworks that apply ruby on rails paradigms like Laravel):

$database = DB::table('TableP', 'TableM')
					->where('TableP.pid', '=', 'TableM.pid')
					->orderBy('p_date', 'desc');



