function properties_full(obj)
{
    document.write('<pre>');
    for (v in obj)
    {
        if(v[0] == '_')
            continue;
        document.write(`[${typeof obj[v]}] `);
        document.write(`${v} => ${obj[v]}`, '<br>');
    }
    document.write('</pre>');
}
function properties(obj)
{
    document.write('<pre>');
    for (v in obj)
    {
        let propertyType = typeof obj[v];
        if(v[0] == '_' || Array.isArray(v) || propertyType === 'function')
            continue;
        document.write(`[${propertyType}] `);
        document.write(`${v} => ${obj[v]}`, '<br>');
    }
    document.write('</pre>');
}

function methods(obj)
{
    document.write('<pre>');
    for (v in obj)
    {
        let propertyVal = obj[v];
        let propertyType = typeof propertyVal;
        if(v[0] == '_' || propertyType !== 'function')
            continue;
        document.write(`[${propertyType}] `);
        let signature = /.+\)/.exec(propertyVal);

        document.write(`${v} => ${signature}`, '<br>');
    }
    document.write('</pre>');
}

function methods_definition(obj)
{
    document.write('<pre>');
    for (v in obj)
    {
        let propertyType = typeof obj[v];
        if(v[0] == '_' || propertyType !== 'function')
            continue;
        document.write(`[${propertyType}] `);
        document.write(`${v} => ${obj[v]}`, '<br>');
    }
    document.write('</pre>');
}