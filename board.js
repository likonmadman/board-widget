(function(){
var s=document.createElement("style");s.textContent=".brd{font-family:var(--font-sans);color:var(--text-primary);max-width:860px}\n.brd .hdr{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 12px;margin-bottom:6px}\n.brd button.rf{margin-left:auto;font-size:11px;padding:2px 8px;color:var(--text-secondary)}\n.brd .hdr b{font-size:15px}\n.brd .hdr span{color:var(--text-muted);font-size:12px}\n.brd .hdr span.stale{color:var(--text-warning)}\n.brd .blk{font-size:12px;color:var(--text-warning);margin-top:2px}\n.brd .stage{font-size:12px;font-weight:500;color:var(--text-primary);margin-top:2px}\n.brd .tgq{font-size:12px;color:var(--text-secondary);margin-top:4px;padding-left:8px;border-left:2px solid var(--border-strong);white-space:pre-wrap;overflow-wrap:anywhere}\n.brd .tgq b{font-weight:500;color:var(--text-muted)}\n.brd .pbar{height:6px;border-radius:3px;background:var(--surface-1);overflow:hidden;margin-bottom:14px}\n.brd .pbar i{display:block;height:100%;background:var(--fill-success,var(--text-success))}\n.brd .row{display:flex;flex-wrap:wrap;gap:10px;align-items:flex-start;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius);margin-bottom:8px}\n.brd .num{color:var(--text-muted);font-size:12px;padding-top:2px;min-width:14px}\n.brd .bod{flex:1 1 300px;min-width:0}\n.brd .ttl{font-size:13px;font-weight:500}\n.brd .ttl a{color:inherit}\n.brd .sub{font-size:12px;color:var(--text-secondary);margin-top:2px}\n.brd .age{font-size:11px;color:var(--text-warning);margin-left:6px;font-weight:400;white-space:nowrap}\n.brd .key{font-family:var(--font-mono);font-size:11px;color:var(--text-muted);background:var(--surface-1);border-radius:4px;padding:1px 5px;margin-right:6px;font-weight:400}\n.brd .area{font-family:var(--font-mono);font-size:11px;color:var(--text-accent);border:1px solid var(--border);border-radius:4px;padding:0 5px;margin-right:6px;font-weight:400;white-space:nowrap}\n.brd .stg{font-size:11px;padding:1px 7px;border-radius:10px;background:var(--surface-1);color:var(--text-muted);margin-left:6px;font-weight:400;white-space:nowrap}\n.brd .bdg{font-size:11px;padding:2px 8px;border-radius:10px;white-space:nowrap;margin-top:2px}\n.brd .ttl .bdg{margin-left:6px;font-weight:400}\n.brd .b-w{background:var(--bg-warning);color:var(--text-warning)}\n.brd .b-t{background:var(--surface-1);color:var(--text-muted)}\n.brd .b-d{background:var(--bg-danger);color:var(--text-danger)}\n.brd .row.hot{border-left:3px solid var(--border-danger,var(--text-danger))}\n.brd .pin{font-size:11px;margin-right:4px}\n.brd .b-e{background:var(--bg-accent);color:var(--text-accent)}\n.brd .btns{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:6px;align-items:center;margin-top:2px;margin-left:auto}\n.brd button{font-family:inherit;font-size:12px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);background:var(--surface-2);color:var(--text-primary);cursor:pointer;white-space:nowrap}\n.brd button:hover{border-color:var(--border-strong)}\n.brd button.tr{padding:6px 10px;margin-left:12px;font-size:14px;color:var(--text-muted);border-color:transparent}\n.brd button.tr:hover{color:var(--text-danger);border-color:var(--border)}\n.brd button.ok{padding:6px 10px;margin-left:12px;font-size:14px;color:var(--text-muted);border-color:transparent}\n.brd button.ok:hover{color:var(--text-success);border-color:var(--border)}\n.brd button.ok+button.tr{margin-left:2px}\n.brd button.pn,.brd button.upn{padding:6px 10px;margin-left:12px;font-size:14px;color:var(--text-muted);border-color:transparent}\n.brd button.pn:hover,.brd button.upn:hover{color:var(--text-accent);border-color:var(--border)}\n.brd button.pn+button.tr,.brd button.upn+button.tr{margin-left:2px}\n.brd a.bdg{text-decoration:none}\n.brd .tails{background:var(--surface-1);border-radius:6px;padding:8px 10px;margin-top:8px;font-size:12px;color:var(--text-secondary)}\n.brd .tails div{display:flex;gap:6px;align-items:baseline;margin:2px 0}\n.brd .tails .ti{font-size:12px;color:var(--text-muted)}\n.brd .sec{font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--text-muted);margin:16px 0 8px}\n.brd .sig{padding:7px 12px}\n.brd .sig .ttl{font-weight:500}\n.brd .ttl,.brd .sub,.brd .tails{overflow-wrap:anywhere}\n.brd .crow{display:block;padding:6px 10px;margin-bottom:4px}\n.brd .chead{display:flex;align-items:center;gap:8px}\n.brd .chead .ttl{flex:1;min-width:0}\n.brd .chead button.tgl{margin:0;border:none;font-size:13px}\n.brd .dot{width:8px;height:8px;border-radius:50%;flex:none;background:var(--text-muted)}\n.brd .d-hot{background:var(--text-danger)}.brd .d-in_progress{background:var(--text-warning)}.brd .d-me,.brd .d-exp{background:var(--text-accent)}\n.brd .more{padding:4px 0 2px 38px}.brd .more .btns{justify-content:flex-start;margin:6px 0 0}\n.brd button.tgl{margin-top:6px;padding:2px 8px;font-size:11px;color:var(--text-muted);background:transparent;border:1px dashed var(--border)}\n.brd .sigh{display:flex;gap:8px;align-items:baseline;justify-content:space-between;flex-wrap:wrap}\n.brd .sigh button.tgl{margin-top:0}\n.brd .sigh>button:not(.tgl){margin-left:auto}\n.brd .sec button.tgl{margin-top:0;text-transform:uppercase;letter-spacing:.05em;font-size:11px}\n.brd .more .btns{margin-top:8px;flex-wrap:wrap}\n@media (max-width:520px){\n.brd .row{flex-wrap:wrap}\n.brd .bod{flex:1 1 calc(100% - 30px)}\n.brd .sig>.bdg{margin-left:0}\n.brd .btns{flex:1 1 auto;flex-wrap:wrap;justify-content:flex-start;margin-left:0}\n.brd button{white-space:normal}\n.brd .chead{flex-wrap:wrap}\n.brd .chead .ttl{flex:1 1 200px}\n.brd .chead .tgl{order:1}\n.brd .chead>button:not(.tgl){order:2;margin-left:22px}\n}";document.head.appendChild(s);
var D=window.BOARD_DATA;
(function(){
const W=D.widget||{};
const WD=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];
const ALIAS={burning:"hot",wip:"in_progress"};
const st=p=>ALIAS[p.status]||p.status;
const BADGE={hot:["горит","b-d"],in_progress:["в работе","b-w"],todo:["не начато","b-t"]};
const today=new Date(D.date+"T00:00:00Z");
const dd=D.date.slice(8,10)+"."+D.date.slice(5,7);
const TOP=p=>!!(p.tg||p.call);
const AT=p=>Math.max(Date.parse(p.tg_at||"")||0,Date.parse(p.call_at||"")||0);
const idle=p=>{const s=p.checked_at||p.first_seen;if(!s)return 0;let n=0;for(let d=new Date(s+"T00:00:00Z");;){d.setUTCDate(d.getUTCDate()+1);if(d>today)break;const w=d.getUTCDay();if(w&&w<6)n++}return n};
const el=(t,c,txt)=>{const e=document.createElement(t);if(c)e.className=c;if(txt!=null)e.textContent=txt;return e};
const ICON={tr:["ti-trash","Удалить пункт"],ok:["ti-check","Готово, закрыть пункт"],pn:["ti-pin","Закрепить наверху"],upn:["ti-pinned-off","Открепить"]};
const btn=(label,prompt,cls)=>{const b=el("button",cls);if(ICON[cls]){b.setAttribute("aria-label",ICON[cls][1]);const i=el("i","ti "+ICON[cls][0]);i.setAttribute("aria-hidden","true");b.appendChild(i)}else b.textContent=label;b.addEventListener("click",()=>sendPrompt((prompt.charAt(0)==="/"?"Выполни "+prompt:prompt)+" (доска "+dd+")\n"));return b};
const isUrl=s=>/^https?:\/\//.test(s||"");
const WS=["вс","пн","вт","ср","чт","пт","сб"];
const dueChip=d=>{const x=new Date(d+"T00:00:00Z"),n=Math.round((x-today)/864e5);if(isNaN(n))return null;if(n<0)return["просрочено "+(-n)+" дн","b-d"];if(n===0)return["срок сегодня","b-w"];if(n===1)return["срок завтра","b-w"];return["срок "+WS[x.getUTCDay()]+" "+d.slice(8,10)+"."+d.slice(5,7),"b-t"]};
const dueKey=p=>p.due||"9999";
const when=(w,at)=>!at?(w==="тг"?"из тг":w):w+" "+(at.slice(0,10)===D.date?at.slice(11,16):at.slice(8,10)+"."+at.slice(5,7));
const toggle=(label,box,open)=>{const b=el("button","tgl",label);b.type="button";b.setAttribute("aria-expanded",open?"true":"false");box.style.display=open?"":"none";b.addEventListener("click",()=>{const o=box.style.display==="none";box.style.display=o?"":"none";b.setAttribute("aria-expanded",o?"true":"false")});return b};
const tailsList=p=>{const tl=el("div","tails");p.tails.forEach(t=>{
  const text=typeof t==="string"?t:t.text;
  const d=el("div");const i=el("i","ti "+((typeof t==="object"&&t.icon)||"ti-chevron-right"));i.setAttribute("aria-hidden","true");
  d.appendChild(i);d.appendChild(document.createTextNode(text));tl.appendChild(d)});return tl};
const buttons=(p,kind)=>{const bt=el("div","btns");
  const mrs=p.mr?[].concat(p.mr):[],ref=p.id+(p.tracker?" ("+p.tracker+")":"");
  if(st(p)!=="done"&&!p.blocked){
    if(mrs.length&&p.mr_ok)bt.appendChild(btn(mrs.length>1?"Смерджить ("+mrs.length+")":"Смерджить","Смерджи "+mrs.join(", ")+" по пункту "+ref+": мерж, выкатка на прод и мониторинг по project.md, раздел Выкатка"));
    else if(p.wait&&!p.did&&!p.next){const n=wdays(p),who=p.wait.who||"";
      bt.appendChild(n>=1?btn("Напомнить","Напомни "+who+" по пункту "+ref+": "+p.title+" (ждем: "+(p.wait.what||"")+", "+n+" раб. дн) - сначала проверь тг и трекер, нет движения - дай короткий текст напоминания туда, где обсуждали"):
        btn("Проверить","Проверь статус пункта "+ref+": "+p.title+" - что у "+who+" (тг, трекер), обнови пункт"))}
    else if(p.did)bt.appendChild(btn(p.did,"Иван: \""+p.did+"\" по пункту "+ref+": "+p.title+" - проверь факт, закрой с итогом или делай дальше"));
    else if(p.next)bt.appendChild(btn(p.next,"Шаг \""+p.next+"\" по пункту "+ref+": "+p.title+" - этот шаг по регламенту доски (правило 6) и project.md, потом next на следующий шаг"));
    else bt.appendChild(btn("Делать","Делай пункт "+ref+": "+p.title+" - целиком, до конца по регламенту доски и project.md"));
  }
  // вместо галки "готово" у пунктов закреп (Иван 12.11)
  if(st(p)!=="done"&&p.status!==undefined)bt.appendChild(p.pin?btn(null,"Открепи на доске пункт "+p.id+": "+p.title,"upn"):btn(null,"Закрепи на доске пункт "+p.id+": "+p.title,"pn"));
  else if(kind==="exp")bt.appendChild(btn(null,"Обещание "+p.id+" выполнено, закрой: "+p.title,"ok"));
  bt.appendChild(btn(null,"Удали с доски пункт "+p.id+": "+p.title,"tr"));return bt};
const title=p=>{const ttl=el("div","ttl");if(p.pin&&st(p)!=="done")ttl.appendChild(el("span","pin","📌"));if(p.area)ttl.appendChild(el("span","area",p.area));
  const key=p.tracker||p.ticket;
  const href=p.link||p.task_url||(isUrl(key)?key:(key&&W.tracker_url?W.tracker_url.replace("{key}",key).replace("{num}",String(key).replace(/\D/g,"")):null))||p.tg_link||null;
  if(key&&!href)ttl.appendChild(el("span","key",key));
  if(href){const a=el("a",null,p.title);a.href=href;ttl.appendChild(a)}else ttl.appendChild(document.createTextNode(p.title));
  (W.chips||[]).forEach(f=>{if(p[f])ttl.appendChild(el("span","stg",p[f]))});
  if(p.tg){const tl=p.tg_link&&href!==p.tg_link;const chat=p.tg_link?"":(p.tg_chat||"");
    const tb=el(tl?"a":"span","bdg b-e",when("тг",p.tg_at)+(chat?" · "+chat:""));if(tl)tb.href=p.tg_link;ttl.appendChild(tb)}
  if(p.call)ttl.appendChild(el("span","bdg b-e",when("созвон",p.call_at)));
  if(p.sent&&st(p)!=="done")ttl.appendChild(el("span","bdg b-e","отправлено "+p.sent));
  if(p.wait&&st(p)!=="done"){const n=wdays(p);ttl.appendChild(el("span","bdg "+(n>=1?"b-w":"b-t"),"жду "+(p.wait.who||"")+(n?" "+n+" дн":"")));
    const c=p.wait.checked;ttl.appendChild(el("span","bdg "+(c===D.date?"b-t":"b-w"),c===D.date?"сверено сегодня":c?"сверено "+c.slice(8,10)+"."+c.slice(5,7):"не сверено"))}
  if(p.due&&st(p)!=="done"){const c=dueChip(p.due);if(c)ttl.appendChild(el("span","bdg "+c[1],c[0]))}
  if(p.pin&&p.pin!=="Иван"&&st(p)!=="done")ttl.appendChild(el("span","bdg b-t","закрепил сам: "+p.pin));
  if(p.blocked&&st(p)!=="done"){const b=p.blocked_at?Math.round((today-new Date(p.blocked_at+"T00:00:00Z"))/864e5):0;ttl.appendChild(el("span","bdg b-w","блокер"+(b>0?" "+b+" дн":"")))}
  const n=idle(p);
  if(n>=3&&!p.blocked&&!p.wait)ttl.appendChild(el("span","age","без движения "+n+" дн"));
  return ttl};
const quote=p=>{const q=el("div","tgq");q.appendChild(el("b",null,"Сообщение"+(p.tg_quote.from?" от "+p.tg_quote.from:"")+(p.tg_quote.at?", "+p.tg_quote.at:"")+": "));
  q.appendChild(document.createTextNode(p.tg_quote.text));return q};
const row=(num,p,badge,badgeCls)=>{
  const r=el("div","row crow"+(num==null?" sig":"")+(num!=null&&st(p)==="hot"&&!p.on_me?" hot":""));
  const head=el("div","chead");
  if(num!=null)head.appendChild(el("div","num",String(num)));
  head.appendChild(el("span","dot d-"+(p.on_me?"me":(num==null?"exp":(st(p)||"todo")))));
  head.appendChild(title(p));
  if(num==null&&badge)head.appendChild(el("span","bdg "+badgeCls,badge));
  const bt=buttons(p,num==null?"exp":"item"),more=el("div","more");
  if(bt.firstChild&&!/^(ok|tr|pn|upn)$/.test(bt.firstChild.className))head.appendChild(bt.firstChild);
  head.appendChild(toggle("▾",more,!!p.focus));
  r.appendChild(head);
  if(p.stage&&st(p)!=="done")more.appendChild(el("div","stage","Этап: "+p.stage));
  if(p.blocked&&st(p)!=="done")more.appendChild(el("div","blk","Блокер: "+p.blocked));
  if(p.mr&&p.mr_ok&&st(p)!=="done")more.appendChild(el("div","stage","Мерж разрешен: "+p.mr_ok));
  if(p.wait&&p.wait.mr&&st(p)!=="done"){const m=el("div","stage");m.appendChild(document.createTextNode("Ждем ревью: "));[].concat(p.wait.mr).forEach((u,i)=>{if(i)m.appendChild(document.createTextNode(", "));const a=el("a",null,"МР");a.href=u;m.appendChild(a)});more.appendChild(m)}
  if(p.wait&&p.wait.note&&st(p)!=="done")more.appendChild(el("div","stage","Сверка "+p.wait.checked.slice(8,10)+"."+p.wait.checked.slice(5,7)+": "+p.wait.note));
  const sub=p.detail||p.subtitle||p.note;
  if(sub)more.appendChild(el("div","sub",sub));
  if(p.tg_quote&&st(p)!=="done")more.appendChild(quote(p));
  if(p.tails&&p.tails.length)more.appendChild(tailsList(p));
  more.appendChild(bt);r.appendChild(more);return r};
const sigRow=p=>{
  const r=el("div","row sig");
  const bod=el("div","bod");
  const more=el("div","more");
  const head=el("div","sigh");
  head.appendChild(title(p));
  const bt=buttons(p,"sig");
  if((p.next||p.did)&&bt.firstChild&&!/^(ok|tr|pn|upn)$/.test(bt.firstChild.className))head.appendChild(bt.firstChild);
  head.appendChild(toggle("подробнее",more,false));
  bod.appendChild(head);
  const sub=p.detail||p.subtitle||p.note;
  if(sub)more.appendChild(el("div","sub",sub));
  if(p.tg_quote)more.appendChild(quote(p));
  if(p.tails&&p.tails.length)more.appendChild(tailsList(p));
  more.appendChild(bt);
  bod.appendChild(more);
  r.appendChild(bod);
  return r;
};
const byTop=(a,b)=>(TOP(b)?1:0)-(TOP(a)?1:0)||(a.blocked?1:0)-(b.blocked?1:0)||AT(b)-AT(a);
const root=document.getElementById("brd");
// закреп (Иван 12.11): пункт всегда наверху, даже из "Жду" и бэклога
const PIN=p=>!!p.pin&&st(p)!=="done";
const parked=p=>p.backlog&&st(p)!=="done"&&!TOP(p)&&!p.wait&&!PIN(p);
// моя задача, мяч у других (Иван 04.11): видна в блоке "Жду", пока не закрыта у заказчика
const waiting=p=>p.wait&&st(p)!=="done"&&!PIN(p);
const items=(D.items||[]).filter(p=>!parked(p)&&!waiting(p)),done=items.filter(i=>st(i)==="done").length;
const waits=(D.items||[]).filter(waiting);
const wdays=p=>{const s=(p.wait&&p.wait.since)||p.checked_at;if(!s)return 0;let n=0;for(let d=new Date(s+"T00:00:00Z");;){d.setUTCDate(d.getUTCDate()+1);if(d>today)break;const w=d.getUTCDay();if(w&&w<6)n++}return n};
const backlog=(D.items||[]).filter(parked);
const hdr=el("div","hdr");
hdr.appendChild(el("b",null,done+" из "+items.length+" закрыт · "+dd));
hdr.appendChild(el("span",null,WD[today.getUTCDay()]+(W.header&&D[W.header]?" · "+D[W.header]:"")));
const stale=D.stale_sources||[];
if(stale.length)hdr.appendChild(el("span","stale","не собрано: "+stale.join(", ")));
hdr.appendChild(btn(stale.length?"↻ дособрать: "+stale.join(", "):"↻ обновить","Обнови доску: свежий тг (tg_read и tg_to_me), записи встреч, дособрать несобранное"+(stale.length?" ("+stale.join(", ")+")":"")+", новое на доску, перерисовать","rf"));
root.appendChild(hdr);
const pb=el("div","pbar"),fill=el("i");
fill.style.width=(items.length?Math.round(done/items.length*100):0)+"%";
pb.appendChild(fill);root.appendChild(pb);

const ord={hot:0,in_progress:1,todo:2};
const open_=items.filter(i=>st(i)!=="done").sort((a,b)=>byTop(a,b)||(ord[st(a)]??2)-(ord[st(b)]??2)||dueKey(a).localeCompare(dueKey(b)));
const pins=open_.filter(PIN).sort((a,b)=>(a.pin==="Иван"?0:1)-(b.pin==="Иван"?0:1)),unp=open_.filter(p=>!PIN(p));
const top=unp.filter(p=>p.tg&&!p.call),calls=unp.filter(p=>p.call),mine=unp.filter(p=>!TOP(p)&&p.on_me),rest=unp.filter(p=>!TOP(p)&&!p.on_me);
let num=0;
const put=p=>{const[label,cls]=p.on_me?["за тобой","b-e"]:(BADGE[st(p)]||BADGE.todo);root.appendChild(row(++num,p,label,cls))};
if(pins.length){root.appendChild(el("div","sec","📌 Закреплено · "+pins.length));pins.forEach(put);
  if(top.length)root.appendChild(el("div","sec","Остальное"))}
top.forEach(put);
if(calls.length){root.appendChild(el("div","sec","С созвона · "+calls.length));calls.forEach(put)}
if(mine.length){root.appendChild(el("div","sec","За тобой · "+mine.length));mine.forEach(put)}
if(rest.length&&(mine.length||calls.length||(pins.length&&!top.length)))root.appendChild(el("div","sec","Остальное · "+rest.length));
rest.forEach(put);
if(waits.length){root.appendChild(el("div","sec","Жду · "+waits.length));
  waits.sort((a,b)=>wdays(b)-wdays(a)).forEach(p=>root.appendChild(row(++num,p,"жду","b-t")))}
if(backlog.length){const box=el("div");const sec=el("div","sec");sec.appendChild(toggle("Бэклог · "+backlog.length,box,false));root.appendChild(sec);root.appendChild(box);
  backlog.sort((a,b)=>(a.blocked?1:0)-(b.blocked?1:0)||dueKey(a).localeCompare(dueKey(b))||(a.first_seen||"").localeCompare(b.first_seen||"")).forEach(p=>box.appendChild(row(++num,p,"бэклог","b-t")))}
if((D.expected||[]).length){
  root.appendChild(el("div","sec","Обещано"));
  D.expected.slice().sort(byTop).forEach(p=>root.appendChild(row(null,p,p.badge||"обещано","b-e")));
}
if((D.signals||[]).length){
  root.appendChild(el("div","sec","Сигналы · "+D.signals.length));
  D.signals.slice().sort((a,b)=>{const f=p=>p.first_seen===D.date||p.checked_at===D.date?0:1;return f(a)-f(b)||idle(b)-idle(a)}).forEach(p=>root.appendChild(sigRow(p)));
}
})();
})();
