using Serilog;
using Serilog.Events;

var builder = WebApplication.CreateBuilder(args);


//Serilog configuration
builder.Host.UseSerilog((ctx, lc) => lc
   .MinimumLevel.Debug()
   .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
   .Enrich.FromLogContext()
   .ReadFrom.Configuration(builder.Configuration));


// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();


try
{
    Log.Information("Application Starting");
    // Configure the HTTP request pipeline.
    if (!app.Environment.IsDevelopment())
    {
        app.UseExceptionHandler("/Home/Error");
    }
    app.UseStaticFiles();

    app.UseRouting();

    app.UseAuthorization();

    app.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");

    app.Run();
}

catch(Exception ex)
{
    Log.Fatal(ex, "Application start up failed");
}

finally
{
    Log.CloseAndFlush();
}