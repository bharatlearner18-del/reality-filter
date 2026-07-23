/* Formspree wiring for the demand-signal forms: the no-match email capture,
   the Premium waitlist, and the "Track this" buttons.

   ── SET THIS ──────────────────────────────────────────────────────────────────
   Paste the ID from your Formspree form's endpoint:
       https://formspree.io/f/XXXXXXXX   →   put the XXXXXXXX part below.

   While it's empty, every form keeps the validation-build behaviour: it shows its
   success state and sends nothing. That is deliberate — an unconfigured site must
   never show users an error (the design handoff shipped a YOUR_FORM_ID
   placeholder that made every submit fail, which is the trap this avoids).
   ─────────────────────────────────────────────────────────────────────────────

   All post to the SAME endpoint; the `type` field tells them apart in the
   Formspree inbox, which keeps this inside the free tier's single-form limit. */
const FORMSPREE_ID = 'mvzekadw';

const FORMSPREE_URL = FORMSPREE_ID ? 'https://formspree.io/f/' + FORMSPREE_ID : null;

/* Returns {ok, skipped}. Never throws: a network failure must be reported to the
   caller, not crash the handler that owns the success/error UI. */
let _warnedUnset = false;
async function sendSignal(payload){
  if(!FORMSPREE_URL){
    if(!_warnedUnset){
      _warnedUnset = true;
      console.info('[forms.js] FORMSPREE_ID is not set — form submissions are stubbed and nothing is being sent.');
    }
    return {ok:true, skipped:true};
  }
  try{
    const res = await fetch(FORMSPREE_URL, {
      method:'POST',
      headers:{'Accept':'application/json','Content-Type':'application/json'},
      body:JSON.stringify(Object.assign({page:location.pathname}, payload))
    });
    return {ok:res.ok, skipped:false};
  }catch(err){
    return {ok:false, skipped:false};
  }
}

/* Shared error line. Only ever shown when a send genuinely failed — never when
   FORMSPREE_ID is unset (sendSignal reports ok:true for that case). */
function showFormError(formEl, msg){
  let p = formEl.parentNode.querySelector('.form-err');
  if(!p){
    p = document.createElement('p');
    p.className = 'form-err';
    formEl.parentNode.insertBefore(p, formEl.nextSibling);
  }
  p.textContent = msg || "Couldn't send — check your connection and try again.";
  p.hidden = false;
}

function clearFormError(formEl){
  const p = formEl.parentNode.querySelector('.form-err');
  if(p) p.hidden = true;
}
