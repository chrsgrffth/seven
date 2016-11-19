task :build do
  puts "----------"
  puts "Generating current Jekyll build"
  puts "----------"
  system("jekyll build --config _config.production.yml")
  puts "----------"
  puts "Build ready."
  puts "----------"
  puts ""
  puts ""
end

task :deploy => :build do
  HOST = "example.com"
  USER = "john-doe"
  REMOTE = "/www/htdocs/foo/bar"
  LOCAL = "#{Dir.pwd}/public/"

  puts "----------"
  puts "Connecting to '#{HOST}' via SSH..."
  puts "Please enter the remote password to start file transfer."
  puts "----------"
  puts ""
  puts ""
  puts "----------"
  system("rsync -avz --delete #{LOCAL} #{USER}@#{HOST}:#{REMOTE}")
  puts "----------"
  puts ""
  puts ""
  puts "----------"
  puts "File tranfer complete."
  puts "Website is now live: #{HOST}"
  puts "----------"
end