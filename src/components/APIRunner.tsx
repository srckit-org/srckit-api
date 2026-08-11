import { useState } from 'react';import { TextField,Paper,Typography,Button,Chip } from '@mui/material';
export default function APIRunner(){const[spec,setSpec]=useState('');const[endpoints,setEndpoints]=useState<string[]>([]);
const parse=()=>{const eps=spec.split('\n').filter(l=>l.match(/^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\s/));setEndpoints(eps);};
return(<div className="p-4 max-w-4xl mx-auto"><Typography variant="h5" sx={{fontWeight:600}} gutterBottom>API Runner</Typography>
<TextField label="API Spec (method path per line)" multiline minRows={8} maxRows={16} value={spec} onChange={e=>setSpec(e.target.value)} fullWidth className="font-mono mb-3" placeholder="GET /api/users\nPOST /api/users\nGET /api/users/:id"/>
<Button variant="contained" onClick={parse} disabled={!spec.trim()}>Parse Endpoints</Button>
<div className="space-y-1 mt-4">{endpoints.map((ep,i)=><Paper key={i} variant="outlined" className="p-2 flex gap-2"><Chip label={ep.split(' ')[0]} size="small" color="primary"/><code className="text-sm">{ep.split(' ').slice(1).join(' ')}</code></Paper>)}</div></div>);}
